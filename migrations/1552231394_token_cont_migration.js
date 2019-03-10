let tokencont = artifacts.require("./tokencont.sol");  
  
module.exports = function(deployer) {  
  deployer.deploy(tokencont);  
};