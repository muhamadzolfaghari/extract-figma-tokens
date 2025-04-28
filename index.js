const figmaData = `
/* Tone 13 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 88.62px;
height: 72.67px;

background: #000000;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 1;


/* 0 */

width: 8px;
height: 20px;

font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */
text-align: center;
letter-spacing: 0.1px;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Tone 12 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 88.62px;
height: 72.67px;

background: #410001;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 1;


/* 10 */

width: 17px;
height: 20px;

font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */
text-align: center;
letter-spacing: 0.1px;

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
`

function extractTonalPalette(data) {
  const tonalPalette = {};
  const toneRegex = /\/\* Tone \d{2} \*\/[\s\S]*?background: (#[\da-fA-F]{6});[\s\S]*?\/\* (\d+)\ *\/[\s\S]*?$/gm;
  let match;
  while ((match = toneRegex.exec(data)) !== null) {
    const color = match[1];
    const tone = parseInt(match[2]);
    tonalPalette[tone] = color;
  }
  return tonalPalette;
}

const tonalPalette = extractTonalPalette(figmaData);

console.log('const tonalPalette =', tonalPalette);

export { tonalPalette };
