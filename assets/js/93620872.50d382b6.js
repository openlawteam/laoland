(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1791],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,k=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(k,s(s({ref:t},l),{},{components:n})):o.createElement(k,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1143:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),s=["components"],i={id:"onboarding-adapter",title:"ERC20/ETH"},d={unversionedId:"contracts/adapters/onboarding/onboarding-adapter",id:"contracts/adapters/onboarding/onboarding-adapter",isDocsHomePage:!1,title:"ERC20/ETH",description:"The Onboarding adapter allows potential and existing DAO members to contribute Ether or ERC-20 tokens to the DAO in exchange for a fixed amount of internal tokens (e.g., UNITS or LOOT tokens already registered with the DAO Bank) based on the amount of assets contributed. If the proposal passes, the internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one) and the tokens provided as tribute are transferred to the Bank extension.",source:"@site/docs/contracts/adapters/onboarding/Onboarding.md",sourceDirName:"contracts/adapters/onboarding",slug:"/contracts/adapters/onboarding/onboarding-adapter",permalink:"/tribute-contracts/docs/contracts/adapters/onboarding/onboarding-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/adapters/onboarding/Onboarding.md",version:"current",frontMatter:{id:"onboarding-adapter",title:"ERC20/ETH"},sidebar:"docs",previous:{title:"Coupon",permalink:"/tribute-contracts/docs/contracts/adapters/onboarding/coupon-onboarding-adapter"},next:{title:"ERC20 Tribute",permalink:"/tribute-contracts/docs/contracts/adapters/onboarding/tribute-adapter"}},p=[{value:"Adapter workflow",id:"adapter-workflow",children:[]},{value:"Adapter configuration",id:"adapter-configuration",children:[]},{value:"Adapter state",id:"adapter-state",children:[{value:"onboarding.chunkSize",id:"onboardingchunksize",children:[]},{value:"onboarding.unitsPerChunk",id:"onboardingunitsperchunk",children:[]},{value:"onboarding.tokenAddr",id:"onboardingtokenaddr",children:[]},{value:"onboarding.maximumChunks",id:"onboardingmaximumchunks",children:[]}]},{value:"Adapter state",id:"adapter-state-1",children:[{value:"ProposalDetails",id:"proposaldetails",children:[]},{value:"proposals mapping",id:"proposals-mapping",children:[]},{value:"units",id:"units",children:[]}]},{value:"Functions description and assumptions / checks",id:"functions-description-and-assumptions--checks",children:[{value:"function configKey(address tokenAddrToMint, bytes32 key) returns (bytes32)",id:"function-configkeyaddress-tokenaddrtomint-bytes32-key-returns-bytes32",children:[]},{value:"function configureDao(DaoRegistry dao, address unitsToMint, uint256 chunkSize, uint256 unitsPerChunk, uint256 maximumChunks, address tokenAddr)",id:"function-configuredaodaoregistry-dao-address-unitstomint-uint256-chunksize-uint256-unitsperchunk-uint256-maximumchunks-address-tokenaddr",children:[]},{value:"function submitProposal(DaoRegistry dao, bytes32 proposalId, address payable applicant, address tokenToMint, uint256 tokenAmount, bytes memory data)",id:"function-submitproposaldaoregistry-dao-bytes32-proposalid-address-payable-applicant-address-tokentomint-uint256-tokenamount-bytes-memory-data",children:[]},{value:"function _sponsorProposal(DaoRegistry dao, bytes32 proposalId, bytes memory data)",id:"function-_sponsorproposaldaoregistry-dao-bytes32-proposalid-bytes-memory-data",children:[]},{value:"function processProposal(DaoRegistry dao, bytes32 proposalId)",id:"function-processproposaldaoregistry-dao-bytes32-proposalid",children:[]},{value:"function _submitMembershipProposal(DaoRegistry dao, bytes32 proposalId, address tokenToMint, address payable applicant, uint256 value, address token)",id:"function-_submitmembershipproposaldaoregistry-dao-bytes32-proposalid-address-tokentomint-address-payable-applicant-uint256-value-address-token",children:[]},{value:"Events",id:"events",children:[]}]}],l={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Onboarding adapter allows potential and existing DAO members to contribute Ether or ERC-20 tokens to the DAO in exchange for a fixed amount of internal tokens (e.g., UNITS or LOOT tokens already registered with the DAO Bank) based on the amount of assets contributed. If the proposal passes, the internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one) and the tokens provided as tribute are transferred to the Bank extension."),(0,r.kt)("p",null,"You can mint any internal tokens but it is usually to mint either UNITS or LOOT tokens. The onboarding process supports raw Ether and ERC-20 tokens as tribute. The ERC-20 token must be allowed/supported by the Bank."),(0,r.kt)("h2",{id:"adapter-workflow"},"Adapter workflow"),(0,r.kt)("p",null,"An onboarding proposal is made by a member first submitting a proposal specifying (1) the applicant who wishes to join the DAO (or increase his stake in the DAO), (2) the type of internal tokens the applicant desires (e.g., member UNITS), and (3) the amount of Ether or ERC-20 tokens that will transfer to the DAO in exchange for those internal tokens. The applicant and actual owner of the ERC-20 tokens can be separate accounts (e.g., the token owner is providing tribute on behalf of the applicant). The internal token type requested must be already registered with the DAO Bank and will usually be pre-defined UNITS or LOOT tokens in the DAO. The proposal submission does not actually transfer the Ether or ERC-20 tokens from its owner. That occurs only after the proposal passes and is processed."),(0,r.kt)("p",null,"The proposal is also sponsored in the same transaction when it is submitted. When a DAO member sponsors the proposal, the voting period begins allowing members to vote for or against the proposal. Only a member can sponsor the proposal."),(0,r.kt)("p",null,"After the voting period is done along with its subsequent grace period, the proposal can be processed. Any account can process a failed proposal. However, only the original proposer (owner of the assets being transferred to the DAO) can process a passed proposal. Prior to processing a passed proposal involving ERC-20 tribute tokens, the owner of those tokens must first separately ",(0,r.kt)("inlineCode",{parentName:"p"},"approve")," the Onboarding adapter as spender of the tokens provided as tribute. Upon processing, if the vote has passed, the internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one). The amount of Ether or ERC-20 tokens provided as tribute are added to the Guild balance and transferred from the token owner to the Bank extension."),(0,r.kt)("p",null,"Upon processing, if the vote has failed (i.e., more NO votes then YES votes or a tie), no further action is taken (the owner of the Ether or ERC-20 tokens still retains ownership of the assets)."),(0,r.kt)("h2",{id:"adapter-configuration"},"Adapter configuration"),(0,r.kt)("p",null,"Each configuration is done based on the token address that needs to be minted."),(0,r.kt)("p",null,"DAORegistry Access Flags: ",(0,r.kt)("inlineCode",{parentName:"p"},"SUBMIT_PROPOSAL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE_DELEGATE_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NEW_MEMBER"),"."),(0,r.kt)("p",null,"Bank Extension Access Flags: ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD_TO_BALANCE"),"."),(0,r.kt)("h2",{id:"adapter-state"},"Adapter state"),(0,r.kt)("h3",{id:"onboardingchunksize"},"onboarding.chunkSize"),(0,r.kt)("p",null,"How many tokens need to be minted per chunk bought."),(0,r.kt)("h3",{id:"onboardingunitsperchunk"},"onboarding.unitsPerChunk"),(0,r.kt)("p",null,"How many units (tokens from tokenAddr) are being minted per chunk."),(0,r.kt)("h3",{id:"onboardingtokenaddr"},"onboarding.tokenAddr"),(0,r.kt)("p",null,"In which currency (tokenAddr) should the onboarding take place."),(0,r.kt)("h3",{id:"onboardingmaximumchunks"},"onboarding.maximumChunks"),(0,r.kt)("p",null,"How many chunks can someone buy max. This helps force decentralization of token holders."),(0,r.kt)("h2",{id:"adapter-state-1"},"Adapter state"),(0,r.kt)("p",null,"Onboarding keeps track of every proposal that goes through it as well as the number of tokens that have been minted so far."),(0,r.kt)("h3",{id:"proposaldetails"},"ProposalDetails"),(0,r.kt)("p",null,"For each proposal created through the adapter, we keep track of the following information:"),(0,r.kt)("h4",{id:"id"},"id"),(0,r.kt)("p",null,"The proposalId (provided offchain)."),(0,r.kt)("h4",{id:"unitstomint"},"unitsToMint"),(0,r.kt)("p",null,"Which token needs to be minted if the proposal passes."),(0,r.kt)("h4",{id:"amount"},"amount"),(0,r.kt)("p",null,"The amount sent by the proposer."),(0,r.kt)("h4",{id:"unitsrequested"},"unitsRequested"),(0,r.kt)("p",null,"The amount of internal tokens that needs to be minted to the applicant if the proposal passes."),(0,r.kt)("h4",{id:"token"},"token"),(0,r.kt)("p",null,"What currency has been used in the onboarding process."),(0,r.kt)("p",null,"We keep this information even though it is part of the configuration to handle the case where the configuration changes while a proposal has been created but not processed yet."),(0,r.kt)("h4",{id:"applicant"},"applicant"),(0,r.kt)("p",null,"The applicant address."),(0,r.kt)("h3",{id:"proposals-mapping"},"proposals mapping"),(0,r.kt)("p",null,"The proposals are organized by DAO address and then by proposal id."),(0,r.kt)("h3",{id:"units"},"units"),(0,r.kt)("p",null,"Accounting to see the amount of a particular internal token that has been minted for a particular applicant. This is then checked against the maxChunks configuration to determine if the onboarding proposal is allowed or not."),(0,r.kt)("h2",{id:"functions-description-and-assumptions--checks"},"Functions description and assumptions / checks"),(0,r.kt)("h3",{id:"function-configkeyaddress-tokenaddrtomint-bytes32-key-returns-bytes32"},"function configKey(address tokenAddrToMint, bytes32 key) returns (bytes32)"),(0,r.kt)("p",null,"This is the function to build the config key for a particular tokenAddrToMint.\nIt's a pure function."),(0,r.kt)("h3",{id:"function-configuredaodaoregistry-dao-address-unitstomint-uint256-chunksize-uint256-unitsperchunk-uint256-maximumchunks-address-tokenaddr"},"function configureDao(DaoRegistry dao, address unitsToMint, uint256 chunkSize, uint256 unitsPerChunk, uint256 maximumChunks, address tokenAddr)"),(0,r.kt)("p",null,"This function configures the adapter for a particular DAO.\nThe modifier is adapterOnly which means that only if the sender is either a registered adapter of the DAO or if it is in creation mode can it be called.\nThe function checks that chunkSize, unitsPerChunks and maximumChunks cannot be 0."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tokenAddr")," is being whitelisted in the bank extension as an ERC-20 token\n",(0,r.kt)("strong",{parentName:"p"},"unitsToMint")," is being whitelisted in the bank extension as an internal token"),(0,r.kt)("h4",{id:"dependency"},"dependency"),(0,r.kt)("p",null,"The adapter also needs a Bank extension. So ",(0,r.kt)("inlineCode",{parentName:"p"},"confgureDao")," will fail if no bank extension is found."),(0,r.kt)("h3",{id:"function-submitproposaldaoregistry-dao-bytes32-proposalid-address-payable-applicant-address-tokentomint-uint256-tokenamount-bytes-memory-data"},"function submitProposal(DaoRegistry dao, bytes32 proposalId, address payable applicant, address tokenToMint, uint256 tokenAmount, bytes memory data)"),(0,r.kt)("p",null,"Submits and sponsors the proposal. Only members can call this function."),(0,r.kt)("p",null,"This function uses ",(0,r.kt)("strong",{parentName:"p"},"_","submitMembershipProposal")," to create the proposal."),(0,r.kt)("p",null,"This function uses ",(0,r.kt)("strong",{parentName:"p"},"_","sponsorProposal")," to sponsor the proposal."),(0,r.kt)("h3",{id:"function-_sponsorproposaldaoregistry-dao-bytes32-proposalid-bytes-memory-data"},"function ","_","sponsorProposal(DaoRegistry dao, bytes32 proposalId, bytes memory data)"),(0,r.kt)("p",null,"This internal function starts a vote on the proposal to onboard a new member."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"dao.sponsorProposal(proposalId, sponsoredBy, address(votingContract))")," checks already that the proposal has not been sponsored yet"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"voting.startNewVotingForProposal(dao, proposalId, data)")," starts the vote process"),(0,r.kt)("h3",{id:"function-processproposaldaoregistry-dao-bytes32-proposalid"},"function processProposal(DaoRegistry dao, bytes32 proposalId)"),(0,r.kt)("p",null,"Once the vote on a proposal is finished, it is time to process it. Anybody can call this function."),(0,r.kt)("p",null,"The function checks that there is a vote in progress for this proposalId and that it has not been processed yet.\nIf the vote is a success (",(0,r.kt)("inlineCode",{parentName:"p"},"PASS"),"), then we process it by minting the internal tokens and moving the tokens from the adapter to the bank extension."),(0,r.kt)("p",null,"If the vote is a tie (",(0,r.kt)("inlineCode",{parentName:"p"},"TIE"),") or failed (",(0,r.kt)("inlineCode",{parentName:"p"},"NOT_PASS"),"), then the funds are returned to the proposer."),(0,r.kt)("p",null,"Otherwise, the state is invalid and the transaction is reverted (if the vote does not exist or if it is in progress)."),(0,r.kt)("h3",{id:"function-_submitmembershipproposaldaoregistry-dao-bytes32-proposalid-address-tokentomint-address-payable-applicant-uint256-value-address-token"},"function ","_","submitMembershipProposal(DaoRegistry dao, bytes32 proposalId, address tokenToMint, address payable applicant, uint256 value, address token)"),(0,r.kt)("p",null,"This function marks the proposalId as submitted in the DAO and saves the information in the internal adapter state."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"No events are emitted from this adapter."))}u.isMDXComponent=!0}}]);