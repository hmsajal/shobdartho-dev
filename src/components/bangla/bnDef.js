export default function BnDef(props) {
  fetch(`bnDictionary.json`)
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i <= 16000; i++) {
        if (props.value === res[i].en) {
          props.fetchedDef = `--  ` + res[i].bn;
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
