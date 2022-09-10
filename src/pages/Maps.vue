<template>
  <div id="map"></div>
</template>

<script>
import { API_KEY } from "./API_KEY";
import { Loader } from "google-maps";

const loader = new Loader(API_KEY);
export default {
  mounted() {
    loader.load().then(function (google) {
      var myLatlng = new google.maps.LatLng(36.686, 48.399);
      var mapOptions = {
        zoom: 15,
        center: myLatlng,
        //scrollwheel: false
      };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!",
      });
      marker.setMap(map);
    });
  },
};
</script>
