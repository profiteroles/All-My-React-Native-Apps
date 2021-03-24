import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Gjly7cLqJSZyrcq7NibF5igjp_7WuF-HdXF3Z3nENauRklgi7R5kYQiBcNxrbyAQQ7ELTbD4nQxFa2ThpRdJavX73f4FIlrTF2ir3153K0deJ3xkp6RkPVbqNRL9X3Yx'
  }
});
