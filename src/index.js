//loading page sections
let aboutPurlbot = document.querySelector("#about-purlbot");
let howTo = document.querySelector("#how-to-use");

aboutPurlbot.addEventListener("click", loadAboutPurlbot);

function loadAboutPurlbot(event) {
  event.preventDefault();
  let displayArea = document.querySelector("#display-area");
  displayArea.innerHTML = `
    <div class="card about-purlbot" style="width: 42rem">
      <img
        src="https://drive.google.com/uc?id=1cmQAznp4h9S_K4EnyUjws1Mx2aJkm2Ga"
        class="card-img-top"
        alt="knitting supplies"
      />
      <div class="card-body">
        <h5 class="card-title" id="about-purlbot-text">
          About <span id="purl-title">Purl</span
            ><span id="bot-title">Bot</span>    
        </h5>
        <p class="card-text">
          Have you ever found a stash of yarn left over from another project and
          thought, "what can I make with this?" You probably then browse through
          countless patterns trying to find something that works with your
          materials and gauge. That's where <span id="purl-title">Purl</span
            ><span id="bot-title">Bot</span>  is different. You tell us a little bit
          about your project and we'll generate a basic pattern for you. Then
          you can customize with whatever cables, bobbles, or special stitches
          you want--just make sure to take this into account when you make your
          swatch.
        </p>
      </div>
    </div>
  `;
}
howTo.addEventListener("click", loadHowTo);

function loadHowTo(event) {
  event.preventDefault();
  let displayArea = document.querySelector("#display-area");
  displayArea.innerHTML = `<div class="card using-purlbot" style="width: 42rem">
        <img
          src="https://drive.google.com/uc?id=1dKworEstqhPX1qisQAAC0Hgy4tehL_UY"
          class="card-img-top"
          alt="yarn stash"
        />
        <div class="card-body">
          <h5 class="card-title"> How to Use <span id="purl-title">Purl</span
            ><span id="bot-title">Bot</span></h5>
          <ol class="card-text">
            <li>
              Choose your yarn and determine approximately how many yards you
              have.
            </li>
            <li>Check the yarn label for suggested needle size.</li>
            <li>
              Using the yarn and needles you've chosen, knit a gauge swatch of
              at least 4" x 4" in the stitch you intend to use for your
              project.*
            </li>
            <li>
              Determine the number of stitches you knit in one inch, both
              horizontally and vertically. This is your gauge.
            </li>
            <li>
              Use PurlBot to see what you can make and generate a custom
              pattern!
            </li>
          </ol>
          <p class="note">
            *This is important because the stitch may change your gauge. A cable
            pattern, for example, will make it tighter, while a lace pattern
            often makes it looser. For more on gauge, see
            <a
              href="https://www.purlsoho.com/create/2020/08/20/all-about-gauge/"
              target="_blank"
            >
              this post by Purl Soho.
            </a>
          </p>
        </div>
      </div>`;
}
//Scarf generator
function handleSubmit(event) {
  event.preventDefault();
  let projectInput = document.querySelector("#project-type");
  let project = projectInput.value;

  let gaugeInput = document.querySelector("#gauge");
  let gauge = gaugeInput.value;
  let nameInput = document.querySelector("#name");
  let name = nameInput.value;
  let possessiveName = `${name}'s`;
  if (name.length < 1) {
    possessiveName = "Your";
  }

  if (gauge * 0 != 0) {
    alert("Please enter a number for your gauge.");
  }
  let childCastOnStiches = Math.round(gauge * 6);
  let adultCastOnStiches = Math.round(gauge * 8);
  if (project === "Scarf") {
    let displayArea = document.querySelector("#display-area");
    displayArea.innerHTML = `<div class="pattern-display"><h1 id="scarf-title">${possessiveName} Scarf Pattern</h1><h3>Sizes are given as (child,adult). </h3>  <p>Cast on (${childCastOnStiches},${adultCastOnStiches}) stitches. Knit in your chosen stitch until you measure (48, 60) inches from cast on, or desired length, and bind off in pattern. <a href="https://blog.knitpicks.com/tutorial-blocking-knits/" target="_blank">Block </a>to measurements listed below. </p>
      <ul> <li> Children's scarf measurement = (6"x48")</li> <li> Adult scarf measurement = (8" x 60")</li></ul> <h4>Suggested Stitches</h4><ul><li><a href="http://freeknitstitches.com/pattern.php?num=106&menu=2" target="_blank">Forked Lightning ⭐ </a></li><li><a href="http://freeknitstitches.com/pattern.php?num=216&menu=1" target="_blank">Twisted Rib ⭐⭐</a></li><li><a href="http://freeknitstitches.com/pattern.php?num=290&menu=4" target="_blank">Sine Wave ⭐⭐⭐</a></li></ul> <ul id="difficulty-ratings"><li>⭐ Easier </li><li>⭐⭐ Intermediate </li><li>⭐⭐⭐ Advanced</li></ul><div id="yarn-calculator"><h5>Not sure if you have enough yarn? Calculate how much you'll need here:</h5><script language="JavaScript" type="text/javascript">function myOpen(url){window.open(url,null,"height=650,width=860,resizable=yes,scrollbars=yes,toolbar=no,menubar=no");}</script><a href="https://www.JimmyBeansWool.com/knittingCalculator" target=_blank><img border=0 width=126 height=102 src="https://www.JimmyBeansWool.com/images/knittingCalculator/knitCalcOtherSites.gif" alt="Knitting Calculator at Jimmy Beans Wool"></a></div></div>`;
  } else {
    alert("Mitten and Hat Functionality Coming Soon! Check back later.");
  }
}

let submitForm = document.querySelector("#scarf-form");
submitForm.addEventListener("submit", handleSubmit);
