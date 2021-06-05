<template>
  <div class="Resume">
    <header>
      <h1>Martin Pichler - software developer</h1>
    </header>
    <h2>Who am I?</h2>
    <ul>
      <li>
        I am 20,
        you can phone me on +43 0664 5544628 or send me a mail at
        <a href="mailto:2001martin.pichler25@gmail.com">2001martin.pichler25@gmail.com</a>
      </li>
      <li>
        I live
        <a href="https://www.openstreetmap.org/#map=11/48.2951/14.3275"
        >here</a
        >, I have a driving license for cars, motorbikes and trucks (C95)
      </li>
    </ul>

    <h2>Skills</h2>
    <h4>Software engineering</h4>
    <ul>
      <li>
        Several years of experience in OOP with C# and Java, the .NET Framework,
        furthermore knowledge of Java Beans - <strong>Xp: 3 years</strong>
      </li>
      <li>
        Project-grade knowledge in the conception of agile
        algorithms and basic understanding of cryptography as well as data encryption
      </li>
    </ul>
    <h4>Web engineering</h4>
    <ul>
      <li>
        Web-Design with HTML/CSS and Bootstrap/Tailwind-CSS
      </li>
      <li>
        Heavy focus on Backend development; Stack building on PHP/Laravel,
        Vue.js and JQuery, experience with NoDe.js and Electron as well as React
      </li>
    </ul>
    <h4>Data engineering</h4>
    <ul>
      <li>
        MS Access, Development-experience with MySQL, PLSQL/TSQL on Oracle database-systems
      </li>
      <li>
        Have worked in agile environments, with SCRUM, Trello/Jira, Git/BitBucket and GitHub
      </li>
    </ul>

    <h4>Various skills</h4>

    <ul>
      <li>Software design, teamwork and communication</li>
      <li>
        Active on <a href="https://github.com/PichlerMartin">Github</a> and
        <a href="https://stackoverflow.com/users/16066128/gordon-cricket"
        >StackOverflow</a
        >
      </li>
    </ul>

    <h2>Employment history</h2>
    <h4>
      Software dev @ <a href="https://www.enjoyit.at/">enjoy IT GmbH</a>
      <small>Since february 2021</small>
    </h4>
    <ul>
      <li>Building functional laravel websites in a dynamic team</li>
    </ul>

    <h4>
      Triage-Nurse at Ordensklinikum Linz Barmherzige Schwestern, Covid-19 crisis
      <small>Summer 2020</small>
    </h4>

    <h4>
      Software dev intern @ <a href="https://www.keba.com/">KEBA AG</a>
      <small>Summer 2019</small>
    </h4>
    <ul>
      <li>
        Java Application for processing 3-dimensional Objects of ATMs
      </li>
      <li>
        Procedural simplification of spherical structures via data processing algorithms
      </li>
    </ul>

    <h4>
      Software dev intern @ <a href="https://www.mic-cust.com/">MIC Datenverarbeitung</a>
      <small>Summer 2018</small>
    </h4>
    <ul>
      <li>
        Content-Parser as Java-Application (with Java Native, Spring)
      </li>
      <li>
        VB macros in Excel, SQL-Scripts in Oracle SQL Developer
      </li>
    </ul>

    <h4>
      IT and logistics apprentice @ <a href="https://www.agrana.com/">Agrana Stärke GmbH, Plant Aschach</a>
      <small>Summer 2016/2017</small>
    </h4>
    <ul>
      <li>
        Assistant Warehouse-management, worked in customer-service and with SAP
      </li>
      <li>
        Assistant Network-Administration for whole Plant Aschach
      </li>
    </ul>

    <h4>Additionally,</h4>
    <ul>
      <li>
        contributed to
        <a
            href="https://github.com/PichlerMartin/stream"
        >
          diploma thesis
        </a>
        involving File-Sharing and via Peer-2-Peer networks/BitTorrent
      </li>
      <li>
        worked on
        <a
            href="https://github.com/PichlerMartin/wifi-analyzer-visual-studio"
        >
          wifi network analyzer
        </a>
        client comission, tool for analyzing wifi connections
      </li>
    </ul>
    <p>
      Preferred IDEs include IntelliJ IDEA, PhpStorm, Visual Studio/VS Code, Atom; I have
      worked with XAMPP, Filezilla, PowerShell, Photoshop, MS Project and many more
    </p>
    <p></p>

    <h2>Education</h2>
    <ul>
      <li>2020-2021: Compulsory military service Austrian Armed Forces as Cyber-GWD</li>
      <li>2015-2020: Higher Technical college Linzer Technikum, HTL Paul-Hahn Straße</li>
      <li>2011-2015: Secondary school Hauptschule Gramastetten</li>
    </ul>

    <h2>Languages</h2>
    <ul>
      <li>Native Language: German</li>
      <li>Foreign Language: English (C1, <a href="https://www.cambridgeenglish.org/">Cambridge</a> Certificate)</li>
    </ul>

    <h2>Activities</h2>
    <p>Literature, market studies, product tests, blood donor, hiking & running</p>
  </div>
</template>

<script>
export default {
  name: 'ResumeComponent',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: "Oxygen", sans-serif;
}

body {
  margin: 40px auto;
  max-width: 650px;
  line-height: 1.7;
  font-size: 14px;
  color: #444;
  padding: 0 10px;
}

h1,
h2,
h3 {
  line-height: 1.2;
}
h2 {
  margin-top: 25px;
}
h4 > small {
  margin-left: 10px;
}
</style>
