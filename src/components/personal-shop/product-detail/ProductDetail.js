import axios from "axios";

export default {
  data() {
    return {
      result: {},
      reseller: "",
      id: 0
    };
  },
  created() {
    this.id = this.$route.params.id;
    axios
      .get(`https://api.mercadolibre.com/items/${this.id}`)
      .then((result) => {
        this.result = result.data;
        axios
          .get("https://api.mercadolibre.com/users/" + result.data.seller_id)
          .then((response) => {
            this.reseller = response.data;
            console.log(this.reseller);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};