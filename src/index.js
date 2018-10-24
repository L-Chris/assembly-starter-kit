import asmPromise from '../assembly/index.ts'

async function main () {
  const { add } = await asmPromise()

  console.log(add(1, 2))
}

main()