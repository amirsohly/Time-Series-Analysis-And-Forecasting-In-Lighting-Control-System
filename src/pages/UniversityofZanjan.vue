<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">University of Zanjan</h4>
            <p class="category">
              The University of Zanjan is located in Zanjan, Iran. It was founded in 1975 and organized in four faculties. Nowadays it is one of the largest universities of the country with a community of over 10,000 students.
            </p>
          </md-card-header>
          <para>
          <md-card-content>
            <div class="table-responsive table-upgrade">
              <h4><b>A Brief History of ZNU</b></h4> 
              <p>ZNU (the Ex Higher School for Agriculture & Animal Science)
              started its activities in 1975, on a formal basis.
              In December 1975, as ratified by the state council a land
              (with an area of 400 hectares) was dedicated by the
              Forestry Organization to ZNU for the purpose of educational
              as well as developmental and physical activities.
              On Feb 20, 1976 Zanjan higher school for Agriculture & Animal Science
              started its work under new title Zanjan Agriculture & Animal Science
              College while it enhanced it's Agriculture & Animal Science Courses to a BS.
              Level. Regarding the Council for the Expansion of Higher Education agreement
              (April 25,1987) on enrolling students in the Engineering college ,
              The council agreed to alter the Zanjan A&AS college title to the center
              for higher education on May 8, 1987. (Including Engineering and Agriculture colleges).
              Following this the science and humanities colleges were established in 1990 & 1991,
              respectively. And lastly the Ministry of Culture and Higher Education agreed
              to change the center for higher school in Zanjan to Zanjan University.</p>
              <br>
              <h4><b>Department of Computer Engineering</b></h4>
              <p>The Department of Computer Engineering in University of Zanjan
              was initiated in 1997 by offering AS degrees in Software Engineering
              which was followed by admitting BSc students in 2005. Right now,
              this department offers BSc and MSc degrees in Software engineering
              and also PhD degree in Artificial Intelligence which is in the
              interest of its skilled faculty members and also the success of
              undergraduate students in finding their way into higher education levels.
              The faculty members of Computer Engineering department consist of
              12 permanent PhDs and about 330 students that are studying in BSc,
              MSc and PhD levels. CE Department future program is to admit students
              in IT and Computer Hardware Engineering.</p><br>

              <h4><b>Contact Informaion</b></h4>
              <table class="table" cellspacing="0">
                <tbody>
                  <tr>
                    <td><b>Address</b></td>
                    <td class="text-center">University of Zanjan, University Blvd., 45371-38791, Zanjan, I. R. Iran</td>
                  </tr>
                  <tr>
                    <td><b>E-mail</b></td>
                    <td class="text-center">znu_pr@znu.ac.ir</td>
                  </tr>
                  <tr>
                    <td><b>Tel</b></td>
                    <td class="text-center">+98 (24) 33051</td>
                  </tr>
                  <tr>
                    <td><b>Zip Code</b></td>
                    <td class="text-center">45371-38791</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </md-card-content>
          </para>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.md-card {
  margin-top: 50px;
}

.table-responsive {
  overflow: auto;
}

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;

  thead tr th {
    font-size: 1.063rem;
    border-top-width: 0;
    font-weight: 300;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  & > tbody > tr > td,
  & > tbody > tr > th,
  & > tfoot > tr > td,
  & > tfoot > tr > th,
  & > thead > tr > td,
  & > thead > tr > th {
    padding: 12px 8px;
    vertical-align: middle;
  }

  & > tbody > tr {
    position: relative;
  }

  td,
  th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
}
para {
  text-align: justify;
  text-justify: inter-word;
}
</style>
