const modules = {};

function importAll(arr) {
  arr.keys().forEach((key) => {
    Object.assign(modules, arr(key));
  });
}

importAll(require.context('./sources/', true, /\.js$/));
console.log(modules);

export default modules;
