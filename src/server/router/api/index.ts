import express from 'express';
import axios from 'axios';

const request = axios.create(
  {
    baseURL: 'https://swapi.co/api',
    timeout: 20000,
  },
);

const router = express.Router();

router.get('/people', (req, res) => {
  request.get('/people')
  .then((response: any) => res.json(response.data.results));
});

router.use((err, req, res, next) => {
  if (err.code && err.status) {
    res.status(err.status).json({
      code: err.code,
      message: err.message
    });
  } else {
    res.status(500).json({ code: 'FATAL' });
  }
});

export default router;
