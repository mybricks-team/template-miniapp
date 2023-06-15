import Taro from "@tarojs/taro";


function schema2data(schema: any) {
  function getBasicData(schema: any) {
    const { type } = schema;

    if (schema.default !== void 0 && schema.default !== '') {
      return schema.default;
    }

    if (type === 'string') {
      const { minLength = 0, maxLength = 8 } = schema;
      const min = +minLength;
      const max = +maxLength;
      const str = uuid(max).slice(
        max - Math.round(min + Math.random() * (max - min))
      );
      return str;
    } else {
      const { minimum = 0, maximum = 100 } = schema;
      const min = +minimum;
      const max = +maximum;
      return min + Math.round(Math.random() * (max - min));
    }
  }
  function uuid(len = 6) {
    const seed = 'abcdefhijkmnprstwxyz';
    const maxPos = seed.length;
    let rtn = '';
    for (let i = 0; i < len; i++) {
      rtn += seed.charAt(Math.floor(Math.random() * maxPos));
    }
    return rtn;
  }
  function mockSchemaData(schema: any) {
    if (!schema) return;
    let obj: any;
    const { type } = schema;
    if (type === 'string' || type === 'number') {
      return getBasicData(schema);
    }

    if (type === 'array') {
      obj = [];
      const { minItems = 1, maxItems = 5 } = schema;
      const len = minItems + Math.round(Math.random() * (maxItems - minItems));
      for (let i = 0; i < len; i++) {
        const value = schema2data(schema.items);
        if (value !== null && value !== void 0) {
          obj.push(value);
        }
      }
    }
    if (schema.type === 'object') {
      obj = {};
      Object.keys(schema.properties || {}).forEach((key) => {
        obj[key] = schema2data(schema.properties[key]);
      });
    }
    return obj;
  }
  return mockSchemaData(schema);
}

interface IOptions {
  method: string;
  url: string;
  data: any;
  params: any;
  headers: any;
  [key: string]: any;
}

interface IConfig {
  before: (options: IOptions) => any;
}

const defaultFn = (options: IOptions, ...args: any) => ({
  ...options,
  ...args,
});

export function call(
  connector: { id: string; script: string;[key: string]: any },
  params: any,
  config?: IConfig
) {
  return new Promise((resolve, reject) => {
    try {
      // const fn = eval(`(${decodeURIComponent(connector.script)})`);
      const fn = connector.script;

      const { before = defaultFn } = config || {};
      fn(
        params,
        { then: resolve, onError: reject },
        {
          ajax(options: IOptions) {
            const opts = before({ ...options });
            opts.headers = opts.headers|| {};
            
            return Taro.request(opts || options).then((res: any) => {
              if (res.statusCode >= 200 && res.statusCode <= 299) {
                return res.data;
              } else {
                reject(res.data);
              }
              return res.data;
            }).catch(error => {
              console.error("request error", error);
              reject(error)
            })
          },
        }
      );
    } catch (ex) {
      console.error(`连接器script错误.`, ex);
      reject(`连接器script错误.`);
    }
  });
}

export function mock(
  connector: { id: string; script: string;[key: string]: any },
) {
  return new Promise((resolve, reject) => {
    if (connector.type === 'http') {
      try {
        if (connector.outputSchema) {
          // use mock data
          return resolve(schema2data(connector.outputSchema))
        } else {
          reject(`connector has no outputSchema`)
        }
      } catch (ex) {
        reject(`connecotr mock error.`);
      }
    } else {
      reject(`error connecotr type`);
    }
  });
}