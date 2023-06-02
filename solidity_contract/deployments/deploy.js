async function main() {
  const MWP = await ethers.getContractFactory("MWP");
  const mwp_dep = await MWP.deploy();
  console.log("Contract Deployed to Address:", mwp_dep.address);
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
