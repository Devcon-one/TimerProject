// document.getElementById("python").addEventListener("click", function (event) {
//   event.preventDefault(); // Stops the default link behavior
//   display.innerHTML = "";
// });

    // PYTHON
// Select the element where you want to display the text
 getElementById('HomePage-Text').remove.addEventListener('click', function() {
      display.innerHTML = '<div class = "BodyText"></div>'
});
var display = document.querySelector(".effect");

// Select the button (link) by its ID
document.getElementById("python").addEventListener("click", function () {
  display.innerHTML = `<div class="details">
        <h2 class="eff-head">PYTHON</h2>
        <p class="eff-para">This expert-level certification focuses on designing and implementing DevOps practices for Azure environments.
        It covers continuous integration/continuous deployment (CI/CD), infrastructure as code, monitoring, security,
        and collaboration between development and operations teams.</p>

        <h4 class="eff-head">Key Skills:</h4>
        <ol class="eff-list">
        <li>Azure DevOps services and tools</li>
        <li>CI/CD pipeline design and implementation</li>
        <li>Infrastructure automation</li>
        <li>Application monitoring and feedback</li>
        <li>Security and compliance in DevOps</li>
        </ol>

        <h4 class="eff-head">Job Opportunities:</h4>
        <ol class="eff-list">
         <li>Azure DevOps services and tools</li>
         <li>CI/CD pipeline design and implementation</li>
         <li>Infrastructure automation</li>
         <li>Application monitoring and feedback</li>
         <li>Security and compliance in DevOps</li>
        </ol>
        </div>
    `;


});

// AZ 900
document.getElementById("az900").addEventListener("click", function () {
  display.innerHTML = `<div class="details">
   <h2 class="eff-head">AZ 900</h2>
   <p class="eff-para">An entry-level certification that provides foundational knowledge of cloud computing concepts and 
   Azure services. Perfect for beginners or professionals transitioning to cloud technologies. Covers basic Azure services,
  pricing, security, and compliance.</p>

  <h4 class="eff-head">Key Skills:</h4>
    <ol class="eff-list">
   <li>Cloud computing fundamentals</li>
  <li>Core Azure services (compute, storage, networking)</li>
 <li>Azure pricing and support models</li>
   <li>Basic security and compliance concepts</li>
   <li>Azure governance and management tools</li>
  </ol>

   <h4 class="eff-head">Job Opportunities:</h4>
   <ol class="eff-list">
    <li>Cloud Support Specialist ($45,000 - $65,000)</li>
    <li>Junior Cloud Administrator ($50,000 - $75,000)</li>
    <li>Technical Sales Representative ($55,000 - $85,000)</li>
    <li>Cloud Migration Specialist ($60,000 - $90,000)</li>
    <li>Azure Administrator (entry-level) ($55,000 - $80,000)</li>
   </ol>
 </div>
 `;
});

    // AZ 204
document.getElementById("az204").addEventListener("click", function() {
  display.innerHTML = `<div class="details">
   <h2 class="eff-head">AZ 204</h2>
   <p class="eff-para">This associate-level certification is designed for developers who build and deploy applications on 
   Microsoft Azure. It covers developing Azure compute solutions, storage solutions, security implementation, monitoring, and 
   integration with Azure services and third-party services.</p>

  <h4 class="eff-head">Key Skills:</h4>
    <ol class="eff-list">
   <li>Developing Azure App Service web apps</li>
  <li>Implementing Azure Functions and containerized solutions</li>
 <li> Working with Azure storage (Blob, Cosmos DB, etc.)</li>
   <li>Implementing authentication and authorization</li>
   <li>Monitoring and troubleshooting Azure solutions</li>
   <li>Integrating caching and content delivery</li>
  </ol>

   <h4 class="eff-head">Job Opportunities:</h4>
   <ol class="eff-list">
    <li>Azure Developer ($70,000 - $120,000)</li>
    <li>Cloud Application Developer ($75,000 - $125,000)</li>
    <li>Full Stack Developer (Azure focus) ($80,000 - $130,000)</li>
    <li>Solutions Developer ($85,000 - $135,000)</li>
    <li>Senior Cloud Developer ($95,000 - $150,000)</li>
   </ol>
 </div>
 `;
});

    // AZ 400
document.getElementById("az400").addEventListener("click", function() {
  display.innerHTML = `<div class="details">
        <h2 class="eff-head">AZ 400</h2>
        <p class="eff-para">This expert-level certification focuses on designing and implementing DevOps practices for Azure environments.
        It covers continuous integration/continuous deployment (CI/CD), infrastructure as code, monitoring, security,
        and collaboration between development and operations teams.</p>

        <h4 class="eff-head">Key Skills:</h4>
        <ol class="eff-list">
        <li>Azure DevOps services and tools</li>
        <li>CI/CD pipeline design and implementation</li>
        <li>Infrastructure automation</li>
        <li>Application monitoring and feedback</li>
        <li>Security and compliance in DevOps</li>
        </ol>

        <h4 class="eff-head">Job Opportunities:</h4>
        <ol class="eff-list">
         <li>DevOps Engineer ($85,000 - $140,000)</li>
         <li>Senior DevOps Consultant ($120,000 - $160,000)</li>
         <li>Cloud Solutions Architect ($110,000 - $170,000)</li>
         <li>Site Reliability Engineer (SRE) ($95,000 - $150,000)</li>
         <li>DevOps Team Lead ($100,000 - $145,000)</li>
        </ol>
        </div>
    `;
});