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
        src="file:///C:/Users/quinn/Google%20Drive/coding/purlbot/images/aboutpurlbotimage.png"
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
          src="file:///C:/Users/quinn/Google%20Drive/coding/purlbot/images/knitconfetti.png"
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

let patternGenerator = document.querySelector("#pattern-generator");
patternGenerator.addEventListener("click", loadPatternGenerator);
function loadPatternGenerator(event) {
  let displayArea = document.querySelector("#display-area");
  displayArea.innerHTML = `      <div id="display-area">
 <div class="card pattern-generator" style="width: 42rem">
        <img
          src="file:///C:/Users/quinn/Google%20Drive/coding/purlbot/images/patterngeneratorpic.png"
          class="card-img-top"
          alt="knitting supplies"
        />
        <div class="card-body">
          <h5 class="card-title" id="pattern-generator">
            Pattern Generator
          </h5>
          <p class="card-text">
          
      <ul> <li> What do you want to knit? </li>
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
        <li>Approximately how many yards of yarn do you have?</li>
        <li>
          On your gauge swatch, how many stitches do you count
          <strong> horizontally </strong> in one inch?
        </li>
        <li>
          On your gauge swatch, how many stitches do you count
          <strong> vertically </strong> in one inch?
        </li>
      </ul>
          </p>
        </div>
        </div>
        
      </div>`;
}
