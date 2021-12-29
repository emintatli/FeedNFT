import './App.css';
import {useEffect,useState} from "react";
import Web3 from "web3";
import pickRandom from 'pick-random';
import nftMintArray from "./nfts.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const contractAddress="0x4675580B87149864E67eAB5eCD0e9C29Bf7392A2";
  const nftPrice="0.1";
  const [contractData,setContractData]=useState();
  const [amount,setAmount]=useState(1);
  const walletConnectHandler=async()=>{
    const accounts=await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider=window.ethereum;
    const userWallet=accounts[0];
    const contractAbi=[
      {
        "inputs": [
          { "internalType": "address", "name": "player", "type": "address" },
          { "internalType": "string[]", "name": "tokenURI", "type": "string[]" }
        ],
        "name": "awardItem",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }
    ];

    const web3 = new Web3(provider);
    const contract = new web3.eth.Contract(contractAbi,contractAddress);
    setContractData({
      contract,
      userWallet
    });
  }

  const mintHandler=async()=>{
    const toMint=pickRandom(nftMintArray,{count: amount});
    try{
      const tx=await contractData.contract.methods.awardItem(contractData.userWallet,toMint).send({from:contractData.userWallet,value:amount*Web3.utils.toWei(nftPrice, 'ether')})
      if(tx){
        toast.success('NFT minted successfully.', {
          position: "bottom-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          autoClose:false
          });
      }
    }
    catch(err){
      toast.error('Someting went wrong!', {
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        autoClose:false
        });
    }
   
  }


  return (
    <>
     <ToastContainer/>
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <img className="eg-main-img" src="/img/logo.png"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex align-items-center justify-content-center">
        
       
      
      </ul>
      <div class="mobile-nav-t d-flex justify-content-center">
       <div className="button-nav">About FeedWorld</div>
       <div className="button-nav">Buy Feed</div>
      </div>
    </div>
  </div>
</nav>

<div className="welcome d-flex w-100 align-items-center justify-content-center flex-column">


  <div className="d-flex mb-5 mt-5 main-welcomer">


<div className="d-flex align-items-center justify-content-center flex-column">

  <h1 className="main-title">
  FIRST BATCH IN SALE!

  </h1>
  <h2 className="main-sub-title">
    This is FeedWorld
  </h2>
  <p className="main-text-p">
  Trade, earn, and win crypto on the most popular decentralized platform in the FeedWorld.
  </p>
<div onClick={walletConnectHandler} className="button-nav px-3 py-2 mb-5">Connect Wallet</div>

{contractData?.userWallet&&<div>
    <div className="d-flex align-items-center justify-content-between"><button class="btn btn-primary add-btn" onClick={()=>{amount>1&&setAmount(amount-1)}}>-</button><button class="btn btn-primary">{amount}</button>
    <button class="btn btn-primary add-btn" onClick={()=>{setAmount(amount+1)}}>+</button></div><br/>
    <button class="btn btn-primary mint-button" onClick={mintHandler}>Mint</button>
    </div>}
    <div class="d-flex justify-content-center">
        <img className="mx-2" width="39px" height="39px" src="/img/open.png"/>
        <img className="mx-2" width="39px" height="39px" src="/img/med.png"/>
        <img className="mx-2" width="39px" height="39px" src="/img/twit.png"/>
        <img className="mx-2" width="39px" height="39px" src="/img/insta.png"/>
      </div>

</div>

<div>

<img className="img-cd" src="/img/100.png"/>

</div>



  </div>
  
 

   


  <h1>Welcome to FeedWorld!</h1>
  <p className="mainp-text text-center">Before we had been born, we did now no longer have a threat to decide our destiny;<br/>
we had been now no longer consulted approximately which own circle of relatives we'd be born into,<br/>
 which united states we'd be a citizen of, our language and color.<br/>
How glad may want to a creature who wakes up crying while he became born be glad on this world?<br/>
Had he already turn out to be glad?<br/>
What became the actual motive of this forgetful creature?<br/>
We do not know this, perhaps we by no means will, however we do recognise this:<br/>
-Everything can be forgotten one day!<br/>
For the primary time, I'm afraid now no longer that I do not know, however that I recognise.<br/>
And this worry led me to dream of making an unforgettable network in history.<br/>
Those who decide their very own destiny...<br/>

Imagine for a second which you very own this world.<br/>
That you may have the entirety you dream of instantly, which you are on the pinnacle of your worldly pleasures,<br/>
 and that every one humanity serves you unconditionally...<br/>
But what changed into the importance of the entirety withinside the restrained human lifestyles span?<br/>

Even whilst the give up of the arena is certain, nobody must anticipate me to combat for fast happiness expectations.<br/>
Let's be honest; We are beings built now no longer to recognise the truth, however to be deceived.<br/>

While some of us are trying to make the world more livable, some are not even aware of the difference.<br/>
Instead of changing the world, I present to you the fact of building a new world;<br/>
An endless metaverse that takes its centrality from its originality,<br/>
 whose rules are determined by the community,<br/>
 who wins as you share, shares as you win, and where there is no loser...</p>

</div>
<img width="100%" src="/img/group.png"/>
<div className="roadm">

<div className="mb-3 text-center">
<h1 className="road-map-title">LAUNCH ROADMAP</h1>
    <p className="road-map-sub">The FeedWorld was created by a team of digital native: Entrepreneurs,<br/> Blockchain experts, Marketing wizards, and artists...</p>
</div>

<div className="roadmap">

  <div className="roadmap-text">
    <h3>WELCOME! LET'S BOARD OUR ROCKET!</h3>
    <p>
    Buckle up and get ready. Join our Discord and follow our social media pages. Then once we hit 25,000 members on Discord, we’ll raffle 5 wolves from our ‘active’ members of the pack. Remember that you need to be an active member to be eligible for this!
    </p>
  </div>

  <div className="roadmap-text">
    <h3>PREPARING FOR OUR JOURNEY...</h3>
    <p>
    We’ll launch our Council of Wolves. The most active & helpful members of our pack get to be added into part of this High-Ranking wolves, no matter what grade of wolves they own! Rumor has it that some secret rewards are prepared for them depending on their contributions! 
      </p>
  </div>

  <div className="roadmap-text">
    <h3>LET'S TAKE OFF TO THE FCKIN MOON AND HOWL!!!</h3>
    <p>
    Launching will be initiated in 3 phases, to make sure that we’ll reach the moon safely and with our floor hitting the ceiling. For each batch we will make sure to invest a lot of money in marketing and community to make sure that each launch is a success We'll also make sure that each batch has its own special touches to make each wolf and each batch even more unique.And we will start buying land in the metaverse, which will only be accessible to our pack members.
</p>
  </div>

  <div className="roadmap-text">
    <h3>OUTSIDE OF OUR WORLD!</h3>
    <p>
    We’ll initiate our wolf's liquidity pool, taking out 60ETH ($250,000) to raise our floor price by rewarding our sweeper, and also removing all dangerous “objects” from within our rank so… Bye paperhands 👋🏻
    </p>
  </div>

  <div className="roadmap-text">
    <h3>LET'S PARTY IN OUTER SPACE BABY!!</h3>
    <p>
    We’ll spend over $500K to buy some lands in the metaverse to start our mission of taking over the metaverse, we’ll get land as close as possible to celebrity-owned properties, and our den will be a private domain where it can only be accessed by our members! We’ll be sure to pick a land that’ll increase in value within a couple of months, so your wolf's value will automatically increase following the attention we’ll be getting! 
    </p>
    </div>

  <div className="roadmap-text">
    <h3>TIME TO CLEAN UP OUR ROCKET</h3>
    <p>
    Our team will start to set up the breeding function and burn out some collections to make sure that our project will last long. And from this function, the members of our pack will enjoy a highly profitable investment and other benefits. (psstt… there’re some legends about the wolf cub will be having so many revolutionary utility that’ll benefit adult wolf owners)So, if you hold rare wolves, you will get 2 wolf cubs from each breedingIf you hold ultra-rare wolves you will get 4 wolf cubs for each breedingAnd if you hold legendary wolves will get 8 wolf cubs per breedingThe cubs will allow their owners to earn Wolf Tokens by holding them.And these tokens not only can be exchanged for ETH but it can also be used to buy many exclusive things in the metaverse!
    </p>
</div>

  <div className="roadmap-text">
    <h3>FIRST STEP ON THE MOON!!</h3>
    <p>
    All the special grade wolves will get rewards in the metaverse. Depending on the grade of your wolf, you will get a certain asset in the metaverse once we’re there. Obviously the higher your wolf’s grade, the higher the value of your reward will be. BUT, you need to hold your wolf and not list it! (it can be virtual land, virtual mansion, virtual vehicle, or something else)
    </p>
</div>

  <div className="roadmap-text">
    <h3>FIRST CIVILIZATION</h3>
    <p>
    We’re going to blow life to our wolves in the metaverse, giving you access to our private domain where you can interact with other members LIVE IN THE METAVERSE, where you can chill, talk, joke, or display your NFT in the museum. Because you’ll be able to use your wolf as your avatar later!So in addition to being able to use your wolves to breed them and get wolf cubs that allow you to earn tokens, you will also be able to use your wolves as an avatar to enter and start living in the metaverse!!
    </p>
</div>
<img  className="kk-button"  src="/img/kk.png"/>
 

</div>
</div>


<div className="roadmap2-text">
  
  <div className="roadmap-text">
  <h1>DEVELOPMENT ROADMAP</h1>
    <p>
    We’re going to blow life to our wolves in the metaverse, giving you access to our private domain where you can interact with other members LIVE IN THE METAVERSE, where you can chill, talk, joke, or display your NFT in the museum. Because you’ll be able to use your wolf as your avatar later!So in addition to being able to use your wolves to breed them and get wolf cubs that allow you to earn tokens, you will also be able to use your wolves as an avatar to enter and start living in the metaverse!!
    </p>
</div>

<div className="roadmap-text">
    <h3>INVESTMENT</h3>
    <p>
    We’ll invest more than $500K in our marketing campaign to make sure that we’ll sell out. And we’ll invest even more after that to make sure that the floor price will keep increasing until we become a diamond-hand community. That way, we ensure that only whales can join our ranks because it won’t be easy to be a part of our pack.
    </p>
</div>

<div className="roadmap-text">
    <h3>PAPERHANDS</h3>
    <p>
    With our strategy and budget to sweep the floor, we’ll eliminate any paper-hands from within our ranks because their value isn’t aligned with ours. Our pack is not here to flip our NFT for a small amount of money. We have the same vision to become whales and get a massive fortune.
      </p>
</div>

<div className="roadmap-text">
    <h3>DIAMOND HANDS</h3>
    <p>
    By removing the paper-hands from our pack, we’ll start rewarding our diamond-hands for their support with the development of our project based on what we envisioned it to be. And the longer they HODL, the more benefits they will get.
</p>
</div>

<div className="roadmap-text">
    <h3>COMMUNITY</h3>
    <p>
    Our pack will have many benefits, and there won’t be any voice unheard, if it’s something that can make us grow, then we’ll hold a poll openly and implement it once it has been agreed by the majority of our pack.
 </p>
</div>

<div className="roadmap-text">
    <h3>OUR VALUES</h3>
    <p>
    The purpose of our club is to gain knowledge and skills in using crypto and NFT to get rich. As wolves move and grow as one unit, we’ll borrow that trait and use it in our cause, growing and evolving as one, that way, success is guaranteed for every member of our pack. We also want to be the first NFT community to make history in the metaverse so we need to be really committed to the future of the metaverse.
</p>
</div>

<div className="roadmap-text">
    <h3>METAVERSE LAND</h3>
    <p>
    Our breeding function will be set up after we sell out 80% of the collection. All our members who hold at least two wolves for a specific period of time will be able to benefit and use this breeding function.Those who have rare, ultra rare and legendary NFTs will be able to get more cub wolves at each breeding!The wolf cubs will allow their holders to get tokens that can be used as a currency in the metaverse or even traded for cryptocurrencies like ETH. And your NFT value will skyrocket once we implement this feature, and it’ll guarantee a high floor price!
</p>
</div>

<div className="roadmap-text">
    <h3>FEEDCOİN</h3>
    <p>
    Our breeding function will be set up after we sell out 80% of the collection. All our members who hold at least two feeds for a specific period of time will be able to benefit and use this breeding function.Those who have rare, ultra rare and legendary NFTs will be able to get more cub feeds at each breeding!The wolf cubs will allow their holders to get tokens that can be used as a currency in the metaverse or even traded for cryptocurrencies like ETH. And your NFT value will skyrocket once we implement this feature, and it’ll guarantee a high floor price!
</p>
</div>







</div>


<div className="founders d-flex flex-column align-items-center">
<div className="roadmap-text mt-5">
    <h1>OUR TEAM</h1>
    <p>
    The FeedWorld was created by a team of digital native: Entrepreneurs, Blockchain experts, Marketing wizards, and artists...
</p>
</div>
<img className="founder-img" src="/img/froundersb.png"/>
</div>


<div className="faq w-100 mt-5">
  <h1 className="">FREQUENTLY ASKED QUESTIONS</h1>

  <div className="card w-50">
    <div className="card-title">
    WHAT ARE CRYPTOWOLVES NFTs?
    </div>
    <p className="p-3">
    The CryptoWolves NFTs are 11,100 randomly generated wolves and 11 special wolves. These wolves exist in four types of rarity: 10,000 common wolves, 1000 rare wolves, 100 ultra rare wolves, 10 legendary hand-drawn wolves, and the founder wolf of all this project: the king of wolves that may never be revealed because it will shock the world of cryptos and NFTs.

With each wolf, you have proof of ownership stored on the Ethereum network as an ERC-721 Non-Fungible Token (NFT).
    </p>
  </div>



  <div className="card w-50">
    <div className="card-title">
    WHERE CAN I VIEW MY NFTs?
    </div>
    <p className="p-3">
    Once minted, you just have to connect your opensea account to view your NFTs.


    </p>
  </div>




  <div className="card w-50">
    <div className="card-title">
    WHEN CAN I MINT IT?
    </div>
    <p className="p-3">
    The public sale will start on December 17th, 4pm EST, but it will be hard because of the competition.


    </p>
  </div>



  <div className="card w-50">
    <div className="card-title">
    HOW CAN I USE MY NFT?
    </div>
    <p className="p-3">
    You will own the intellectual property and commercial rights of your CryptoWolves. You can build derivatives from your Wolves and own any potential monetization.
You can use as an avatar on your social media, you can resell it for profit, or you can hold it to get rewards and you can also enjoy the private group and the many benefits that come with it!



    </p>
  </div>



  <div className="card w-50">
    <div className="card-title">
    HOW MUCH ARE THE ROYALTIES?

    </div>
    <p className="p-3">
    Royalties will be 10% on secondary sales to ensure that there will always be enough funds to invest for holders and to achieve our goal in maintaining the pack's quality.



    </p>
  </div>


  
    <div className="card-title w-50">
    HOW CAN I JOIN THE WHITELIST?

    </div>
  
  



<h1 className="mt-5 mb-5">JOIN THE PACK ON DISCORD</h1>

<img src="/img/join.png"/>

</div>


<div className="footer">
  <img  src="/img/logo.png"/>
  <ul className="footer-list">
    <li><b>Exchange</b></li>
    <li>Buy crypto</li>
    <li>Market</li>
    <li>Learn crypto</li>
    <li>Contact</li>
  </ul>

  <ul className="footer-list">
    <li><b>Contact</b></li>
    <li>43252 Borer Mountains</li>
    <li>Zackerychester</li>
    <li>Bahamas</li>
    <li>732-528-4945</li>
  </ul>

  <ul className="footer-list"> 
    <li><b>Newsletter</b></li>
    <li>Subscribe our newsletter to get more free design course and resource.</li>
    <li className="email-cover"><input placeholder="Enter your email" className="email-input mt-2"/><div className="email-button"><i class="fas fa-arrow-right email-icon"></i></div></li>
  </ul>
</div>


    </>
  );
}

export default App;
