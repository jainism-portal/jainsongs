export let allScripts = ['Latn', 'Deva', 'Gujr', 'Beng', 'Mlym', 'Knda', 'Taml', 'Telu', 'Orya', 'Sinh']

export let allScriptsFullnames = ['Latin', 'Devanagari', 'Gujarati', 'Bengali', 'Malayalam', 'Kannada', 'Tamil', 'Telugu', 'Odia', 'Sinhala']

export function getScriptFullnames(scriptsArray) {
  let arr = scriptsArray.map(script => {
    return new Intl.DisplayNames(['en'], { type: 'script' }).of(script).toLowerCase();
  })
  return arr
}
