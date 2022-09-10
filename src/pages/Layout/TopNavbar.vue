<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <div class="md-collapse">
          <md-list>
            <md-list-item href="#/charts">
              <i class="material-icons">analytics</i>
            </md-list-item>
            <md-list-item href="#/table">
              <i class="material-icons">content_paste</i>
            </md-list-item>
            <md-list-item href="#/University-of-Zanjan">
              <i class="material-icons">school</i>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>