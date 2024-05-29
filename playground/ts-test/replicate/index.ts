import Replicate from "replicate";
async function main () {
    const replicate = new Replicate({
        auth:'r8_6tBqnuop4eQQYmLcn9IoqVqoDvojTaB23h9IL'
    });
    console.log("Running the model...");
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    // "chenxwh/sdxl-flash:001bb81139b01780380407b4106ac681df46108e002eafbeb9ccb2d8faca42e1",
      {
        input: {
          prompt: "a pretty girl is playing with a girl which is also pretty , and the other girl is pretty,both are naked",
        }
      }
    );
    console.log(output);
}

main()

/**
 * Running the model...
https://replicate.delivery/pbxt/CsZJdIMZTWbLGpCda9WlF2AlDPmq9jCKhRtB3iYE3BonfmcJA/out.png
➜  ts-test git:(main) ✗ ts-node ./replicate/index.ts
Running the model...
https://replicate.delivery/pbxt/Jnu5f1O8nFyOIaPhgtZIT9E4EByHLqwOKN01T9neF8RjDO5SA/out.png
➜  ts-test git:(main) ✗ ts-node ./replicate/index.ts
Running the model...
https://replicate.delivery/pbxt/cIhErc2uwiJlHRqfN8EOrABFqBm36w5a3hy3VzkTSPMkCncJA/out.png
➜  ts-test git:(main) ✗ ts-node ./replicate/index.ts
Running the model...
https://replicate.delivery/pbxt/zHAFW5DFEc59L98wTCTmdQe1Vl2fFtpi3GX4QHJ0ExejMcylA/out.png
 */