/** basePath 包含当前端和语言；独立站根路径为空时仍返回有效的首页地址。 */
export function href(basePath:string,slug=''){return (basePath||'')+(slug?'/'+slug:'')||'/'}
