<template>
  <div class="lebenslaufcomponenet">
    <header>
      <h1>Martin Pichler - Softwareentwickler</h1>
    </header>
    <h2>Wer bin ich?</h2>
    <ul>
      <li>
        Ich bin {{ calculateAge() }},
        Sie können mich erreichen unter +43 0664 5544628 oder mir mailen auf
        <a href="mailto:2001martin.pichler25@gmail.com">2001martin.pichler25@gmail.com</a>
      </li>
      <li>
        Ich lebe
        <a href="https://www.openstreetmap.org/#map=11/48.2951/14.3275"
        >hier</a
        >, ich besitze einen Führerschein für Autos, Motorräder und LKWs (C95)
      </li>
    </ul>

    <h2>Skills</h2>
    <h4>Softwareentwicklung</h4>
    <ul>
      <li>
        Mehrjährige Erfahrung in der Objektorientierten Programmierung mit C# und Java,
        dem .NET-Framework, weiters Kenntnisse zu Java Beans - <strong>Xp: 3 Jahre</strong>
      </li>
      <li>
        Projektkenntnisse in der Erstellung von performanten Algorithmen und grundlegende
        Kenntnisse Kryptographie/Verschlüsselung
      </li>
    </ul>
    <h4>Webentwicklung</h4>
    <ul>
      <li>
        Webdesign HTML/CSS und Bootstrap oder Tailwind-CSS
      </li>
      <li>
        Kenntnisse in der Backendentwicklung; Stack aufbauend auf Vue.js,
        PHP/Laravel und JQuery; Erfahrung mit NoDe.js und Electron
      </li>
    </ul>
    <h4>Datenbarchitektur</h4>
    <ul>
      <li>
        MS Access, Entwicklung auf MySQL, Erfahrung mit PLSQL/TSQL auf Oracle Systemen
      </li>
      <li>
        Erfahren mit agilen Methoden, SCRUM, Trello/Jira; Bitbucket + Git/GitHub
      </li>
    </ul>

    <h4>Andere Kenntnisse</h4>

    <ul>
      <li>Softwaredesign, Teamwork und Kommunikation</li>
      <li>
        Aktiv auf <a href="https://github.com/PichlerMartin">Github</a> und
        <a href="https://stackoverflow.com/users/16066128/gordon-cricket"
        >StackOverflow</a
        >
      </li>
    </ul>

    <h2>Berufserfahrung</h2>
    <h4>
      Software dev @ <a href="https://www.enjoyit.at/">enjoy IT GmbH</a>
      <small> Seit Februar 2021</small>
    </h4>
    <ul>
      <li>
        Backend PHP/Laravel, Web-Apps und QJuery/Formulare, Vue.js
        Datenbankentwicklung mit MySQL
        VCS mit BitBucket, SCRUM mit Jira
      </li>
    </ul>

    <h4>
      Triage-Ferialjob beim Ordensklinikum Linz Barmherzige Schwestern
      <small> Sommer 2020</small>
    </h4>

    <h4>
      Software-Entwickler Java @ <a href="https://www.keba.com/">KEBA AG</a>
      <small> Sommer 2019</small>
    </h4>
    <ul>
      <li>
        Anwendung für die Verarbeitung von 3D-Modellen
      </li>
      <li>
        Prozedurale Simplifikation von dreidimensionalen Körpern
      </li>
    </ul>

    <h4>
      Software-Entwickler Java @ <a href="https://www.mic-cust.com/">MIC Datenverarbeitung</a>
      <small> Sommer 2018</small>
    </h4>
    <ul>
      <li>
        Content-Parser als Java-Anwendung (mit Java Native, Spring)
      </li>
      <li>
        VB Makros in Excel, SQL-Skripts im Oracle SQL Developer
      </li>
    </ul>

    <h4>
      2x Berufspraktikum @ <a href="https://www.agrana.com/">Agrana Stärke GmbH, Werk Aschach</a>
      <small> Sommer 2016/2017</small>
    </h4>
    <ul>
      <li>
        Assistent Lagerlogistik unter Verwendung von SAP/Kundenbetreuung
      </li>
      <li>
        Netzwerkadministration des Standortes Aschach/Donau
      </li>
    </ul>

    <h4>Zusätzlich,</h4>
    <ul>
      <li>
        mitgearbeitet an
        <a
            href="https://github.com/PichlerMartin/stream"
        >
          Diplomarbeit
        </a>
        Filesharing-Applikation mit Peer-2-Peer Netzwerken/BitTorrent in Java
      </li>
      <li>
        gearbeitet an
        <a
            href="https://github.com/PichlerMartin/wifi-analyzer-visual-studio"
        >
          WLAN-Analyzer
        </a>
        Auftragsarbeit, WLAN-Netzwerkscanner
      </li>
    </ul>
    <p>
      Arbeite mit IntelliJ IDEA, PhpStorm, Visual Studio/VS Code, Atom, XAMPP, Filezilla, Bash, PS, etc.
      Selbstredend Kenntnisse in allen Office-Programmen, Grafikbearbeitung und grundlegendem PM
    </p>
    <p></p>

    <h2>Relevante Ausbildung</h2>
    <ul>
      <li>2020-2021: Grundwehrdienst Bundesheer als Cyber-GWD</li>
      <li>2015-2020: LiTec - Linzer Technikum, HTL Paul-Hahn Straße, Fachrichtung Informationstechnologie</li>
      <li>2011-2015: Hauptschule Gramastetten</li>
    </ul>

    <h2>Sprachen</h2>
    <ul>
      <li>Muttersprache: Deutsch</li>
      <li>Fremdsprache: English (C1, <a href="https://www.cambridgeenglish.org/">Cambridge</a> Certificate)</li>
    </ul>

    <h2>Interessen/Freizeitbeschäftigungen</h2>
    <p>Literatur, Marktforschung, Produkttests, Blutspenden, Wandern & Laufen</p>
  </div>
</template>

<script>
export default {
  title: 'Martin Pichler',
  name: 'LebenslaufComponent',
  methods: {
    calculateAge: function () {
      var ageDifMs = Date.now() - (new Date("09.04.2001")).getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1969)
    }
  }
}
</script>