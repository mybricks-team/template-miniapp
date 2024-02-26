/**
 * MyBricks Opensource
 * https://mybricks.world
 * This source code is licensed under the MIT license.
 *
 * CheMingjun @2019
 * mybricks@126.com
 */

import React from "react";
import Main from "./Main";
// import pkg from "../package.json";
import MultiScene from "./MultiScene";

export * from './scenesContext';

// console.log(`%c ${pkg.name} %c@${pkg.version}`, `color:#FFF;background:#fa6400`, ``, ``);

export function render(json, opts: { events?, env?, comDefs?, comInstance?, observable?, ref? } = {}, _context?, scenesOperate?) {

  if (Array.isArray(json.scenes)) {
    return <MultiScene json={json} options={opts as any} _context={_context} scenesOperate={scenesOperate} />
  }
  return (
    <Main json={json} opts={opts as any} _context={_context}/>
  )
}
