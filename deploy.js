const {ethers} = require("hardhat");

async function main(){
    const Message = await ethers.getContractFactory("Message");

    const message = await Message.deploy();

    await message.waitForDeployment();

    console.log("Message Deployed to:", await message.getAddress());
}

main().catch((error)=>{
    console.log(error);
    process.exitCode = 1;
});