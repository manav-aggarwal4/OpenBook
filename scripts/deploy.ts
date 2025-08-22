import { ethers } from "hardhat";

async function main() {
  console.log("🚀 Deploying OpenBook Smart Contracts...");

  // Get the deployer account
  const [deployer] = await ethers.getSigners();
  console.log("📝 Deploying contracts with account:", deployer.address);
  console.log("💰 Account balance:", (await deployer.getBalance()).toString());

  // Deploy CampusVerification contract
  console.log("\n📚 Deploying CampusVerification...");
  const CampusVerification = await ethers.getContractFactory("CampusVerification");
  const campusVerification = await CampusVerification.deploy();
  await campusVerification.deployed();
  console.log("✅ CampusVerification deployed to:", campusVerification.address);

  // Deploy OpenBookToken contract
  console.log("\n🪙 Deploying OpenBookToken...");
  const OpenBookToken = await ethers.getContractFactory("OpenBookToken");
  const openBookToken = await OpenBookToken.deploy(campusVerification.address);
  await openBookToken.deployed();
  console.log("✅ OpenBookToken deployed to:", openBookToken.address);

  // Deploy TextbookMarketplace contract
  console.log("\n🏪 Deploying TextbookMarketplace...");
  const TextbookMarketplace = await ethers.getContractFactory("TextbookMarketplace");
  const textbookMarketplace = await TextbookMarketplace.deploy(campusVerification.address);
  await textbookMarketplace.deployed();
  console.log("✅ TextbookMarketplace deployed to:", textbookMarketplace.address);

  // Set marketplace address in token contract
  console.log("\n🔗 Linking contracts...");
  await openBookToken.setMarketplace(textbookMarketplace.address);
  console.log("✅ Marketplace address set in token contract");

  // Verify some test students (for testing purposes)
  console.log("\n👥 Setting up test verifications...");
  
  const testStudents = [
    {
      address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", // Hardhat test account
      campus: "MIT",
      tokenURI: "ipfs://QmTestCampusBadge1"
    },
    {
      address: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", // Hardhat test account
      campus: "Stanford",
      tokenURI: "ipfs://QmTestCampusBadge2"
    }
  ];

  for (const student of testStudents) {
    try {
      await campusVerification.verifyStudent(
        student.address,
        student.campus,
        student.tokenURI
      );
      console.log(`✅ Verified student ${student.address} for ${student.campus}`);
    } catch (error) {
      console.log(`⚠️  Could not verify student ${student.address}:`, error.message);
    }
  }

  // Log deployment summary
  console.log("\n🎉 Deployment Complete!");
  console.log("=" .repeat(50));
  console.log("📋 Contract Addresses:");
  console.log("CampusVerification:", campusVerification.address);
  console.log("OpenBookToken:", openBookToken.address);
  console.log("TextbookMarketplace:", textbookMarketplace.address);
  console.log("=" .repeat(50));
  
  console.log("\n📝 Next Steps:");
  console.log("1. Update your .env file with these contract addresses");
  console.log("2. Verify contracts on PolygonScan");
  console.log("3. Update frontend configuration");
  console.log("4. Test the contracts on testnet");

  // Save deployment info to file
  const deploymentInfo = {
    network: await ethers.provider.getNetwork(),
    deployer: deployer.address,
    contracts: {
      campusVerification: campusVerification.address,
      openBookToken: openBookToken.address,
      textbookMarketplace: textbookMarketplace.address
    },
    timestamp: new Date().toISOString()
  };

  const fs = require('fs');
  fs.writeFileSync(
    'deployment.json',
    JSON.stringify(deploymentInfo, null, 2)
  );
  console.log("\n💾 Deployment info saved to deployment.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });
