
// ================================
// Tagged Templates Function
// An illustration of how it works
// ================================
function htmlEscape(
  literals:TemplateStringsArray,
  ...placeholders:any[]
): string {
  console.log(literals)
  console.log(placeholders)

  let result = ""
  for (let i = 0; i < placeholders.length; i++) {
    result += literals[i]
    result += placeholders[i]
      .replace(/&/g, "&amp").replace(/"/g, "&quot")
      .replace(/"/g, "'").replace(/</g, "&lt")
      .replace(/>/g, "&gt")
  }
  result += literals[literals.length - 1]
  return result
}

const title = 'title'
const subtitle = 'subtitle'
const word1 = 'word1'
const word2 = 'word2'
const italic = 'italic'
const bold = 'bold'
const noSpace1 = 'noSpace1'
const noSpace2 = 'noSpace2'

// The function htmlEscape above can be call like so:
let html = htmlEscape`<h1>${title}</h1>
  <h2>${subtitle}</h2>
<p>${word1} <i>${italic}</i><b>${bold}</b>${noSpace1}${noSpace2}</p>
`
console.log(html)

/*
$ node html-escape-w-tagged-templates-functions.js
[
  '<h1>',
  '</h1>\n  <h2>',
  '</h2>\n<p>',
  ' <i>',
  '</i><b>',
  '</b>',
  '',
  '</p>\n'
]
[
  'title',    'subtitle',
  'word1',    'italic',
  'bold',     'noSpace1',
  'noSpace2'
]
<h1>title</h1>
  <h2>subtitle</h2>
<p>word1 <i>italic</i><b>bold</b>noSpace1noSpace2</p>
*/
