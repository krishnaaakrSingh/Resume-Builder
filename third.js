const btn = document.querySelector('.p2');
const body = document.body;
const submitBtn = document.querySelector('.submit');

let show = 0;

document.documentElement.style.scrollBehavior = "smooth";

btn.addEventListener('click', () => {
  if (show === 0) {
    body.style.background = "black";
    btn.textContent = "☀️ Light";
    show = 1;
  } else {
    body.style.background = "linear-gradient(135deg, #0f4c75 0%, #1b6ca8 30%, #0a9396 60%, #0e7c7b 100%)";
    btn.textContent = "🌙 Dark";
    show = 0;
  }
});

submitBtn.addEventListener('click', async () => {
  const inputs = document.querySelectorAll('.r');
  const textarea = document.querySelector('.t');

  let allFilled = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') allFilled = false;
  });

  if (textarea.value.trim() === '') allFilled = false;

  if (!allFilled) {
    alert('Please fill all fields before generating your resume!');
    return;
  }

  const name = inputs[0].value.trim();
  const phone = inputs[1].value.trim();
  const email = inputs[2].value.trim();
  const location = inputs[3].value.trim();
  const jobTitle = inputs[4].value.trim();
  const company = inputs[5].value.trim();
  const degree = inputs[6].value.trim();
  const year = inputs[7].value.trim();
  const college = inputs[8].value.trim();
  const skills = inputs[9].value.trim();
  const experience = textarea.value.trim();

  submitBtn.textContent = 'Generating...';
  submitBtn.disabled = true;

  setTimeout(() => {

    const resumeHTML = `
<div style="font-family: Arial, sans-serif; color:#111; line-height:1.5; padding:10px;">

  <div style="text-align:center; border-bottom:2px solid #000; padding-bottom:10px;">
    <h1 style="margin:0; font-size:22px; letter-spacing:1px;">${name}</h1>
    <p style="margin:5px 0; font-size:12px;">
      ${email} | ${phone} | ${location}
    </p>
  </div>

  <div style="margin-top:12px;">
    <h2 style="font-size:13px; margin:0; border-bottom:1px solid #ddd;">PROFILE</h2>
    <p style="font-size:12px; margin:5px 0;">
      ${jobTitle} at ${company} | Skilled professional with hands-on experience.
    </p>
  </div>

  <div style="margin-top:10px;">
    <h2 style="font-size:13px; margin:0; border-bottom:1px solid #ddd;">EXPERIENCE</h2>
    <p style="font-size:12px; margin:5px 0;">
      ${experience}
    </p>
  </div>

  <div style="margin-top:10px;">
    <h2 style="font-size:13px; margin:0; border-bottom:1px solid #ddd;">EDUCATION</h2>
    <p style="font-size:12px; margin:5px 0;">
      ${degree} — ${college} (${year})
    </p>
  </div>

  <div style="margin-top:10px;">
    <h2 style="font-size:13px; margin:0; border-bottom:1px solid #ddd;">SKILLS</h2>
    <p style="font-size:12px; margin:5px 0;">
      ${skills}
    </p>
  </div>

</div>
`;

    let outputDiv = document.getElementById('output');

    if (!outputDiv) {
      outputDiv = document.createElement('div');
      outputDiv.id = 'output';
      outputDiv.style.cssText = `
        margin-top: 18px;
        background: #fff;
        border-radius: 14px;
        padding: 20px 16px;
        color: #111;
        font-family: Arial, sans-serif;
        font-size: 13px;
        line-height: 1.6;
        max-height: none;
        overflow-y: visible;
        box-shadow: 0 10px 40px rgba(0,0,0,0.4);
      `;
      document.getElementById('card').appendChild(outputDiv);
    }

    outputDiv.innerHTML = resumeHTML;

    outputDiv.scrollIntoView({ behavior: "smooth", block: "start" });

    let pdfBtn = document.getElementById('pdfBtn');
    if (!pdfBtn) {
      pdfBtn = document.createElement('button');
      pdfBtn.id = 'pdfBtn';
      pdfBtn.textContent = 'Download PDF';
      pdfBtn.style.cssText = `
        display: block;
        margin: 12px auto 0;
        padding: 10px 24px;
        background: #1b6ca8;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
      `;
      pdfBtn.addEventListener('click', () => {
        const resumeContent = outputDiv.querySelector('div');
        const opt = {
          margin: 10,
          filename: name + '_Resume.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(resumeContent).save();
      });
      document.getElementById('card').appendChild(pdfBtn);
    }

    submitBtn.textContent = 'Generate Resume';
    submitBtn.disabled = false;

  }, 800);
});
