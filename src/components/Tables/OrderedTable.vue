<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Kind of Labs and Workshops">{{ item.KindOfLabsAndWorkshops }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "Software Lab",
          KindOfLabsAndWorkshops: "Labs and Workshops",
        },
        {
          id: 2,
          name: "Network Lab",
          KindOfLabsAndWorkshops: "Labs and Workshops",
        },
        {
          id: 3,
          name: "IT Lab",
          KindOfLabsAndWorkshops: "Labs and Workshops",
        },
        {
          id: 4,
          name: "Database Lab",
          KindOfLabsAndWorkshops: "Labs and Workshops",
        },
        {
          id: 5,
          name: "Data Mining",
          KindOfLabsAndWorkshops: "Research Labs",
        },
        {
          id: 6,
          name: "Wireless Networks",
          KindOfLabsAndWorkshops: "Research Labs",
        },
        {
          id: 7,
          name: "Multi-Agent Systems",
          KindOfLabsAndWorkshops: "Research Labs",
        },
        {
          id: 8,
          name: "Operating Systems",
          KindOfLabsAndWorkshops: "Research Labs",
        },
        {
          id: 9,
          name: "Bioinformatics",
          KindOfLabsAndWorkshops: "Research Labs",
        },
      ],
    };
  },
};
</script>
