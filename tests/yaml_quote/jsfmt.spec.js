run_spec(__dirname, ["yaml"]);
run_spec(__dirname, ["yaml"], { singleQuote: true });
run_spec(__dirname, ["yaml"], { proseWrap: "never" });
run_spec(__dirname, ["yaml"], { proseWrap: "always" });
