let id = 0;
function* idGenerate() {
  while (true) {
    yield id++;
  }
}
export const getId = idGenerate()