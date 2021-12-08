/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Black Musicians API!');
});

/// /////////////////////////////////////
/// ///blackmusicians database///////////
/// /////////////////////////////////////

router.route('/album')
  .get((rec, res) => {
    try {
      console.log('touched /album with GET');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((rec, res) => {
    try {
      console.log('touched /album with PUT');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .post((rec, res) => {
    try {
      console.log('touched /album with POST');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete((rec, res) => {
    try {
      console.log('touched /album with DELETE');
      res.json({data: data});
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });

router.route('/performers')
  .get((rec, res) => {
    try {
      console.log('touched /performers with GET');
      res.json({data: data});

      const performers = await db.performers.findAll({
        where:  {
          artist_id: req.params.artist_id
        }
      });

    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((rec, res) => {
    try {
      console.log('touched /performers with PUT');
      res.json({data: data});

      const performers = await db.performers.update(
        {
          artist_first_name: req.body.artist_first_name,
          artist_last_name: req.body.artist_last_name,
          country_of_origin: req.body.country_of_origin,
          gender: req.body.gender,
          birth_date: req.body.birth_date
        },
        {
          where: {
            artist_id: req.body.artist_id
          }
        }
      );
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .post((rec, res) => {
    try {
      console.log('touched /performers with POST');
      res.json({data: data});

      const performers = await db.performers.create({
        artist_id: currentId,
        artist_first_name: req.body.artist_first_name,
        artist_last_name: req.body.artist_last_name,
        country_of_origin: req.body.country_of_origin,
        gender: req.body.gender,
        birth_date: req.body.birth_date
      });

    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete((rec, res) => {
    try {
      console.log('touched /performers with DELETE');
      res.json({data: data});

      const performers = await db.performers.destroy({
        where:  {
          artist_id: req.params.artist_id
        }
      });

    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
    });
  
  ////NICK THOMSON/////
  router.route('/songs')
  .get((rec, res) => {
    try {
      console.log('touched /songs with GET');
      res.json({data: data});

      const songs = await db.songs.findAll({
        where:  {
          song_id: req.params.song_id
        }
      });

    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .put((rec, res) => {
    try {
      console.log('touched /songs with PUT');
      res.json({data: data});

      const songs = await db.songs.update(
        {
          track_name: req.body.track_name,
          track_duration: req.body.track_duration,
          album_id: req.body.album_id,
          explicit: req.body.explicit
        },
        {
          where: {
            song_id: req.body.song_id
          }
        }
      );
    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .post((rec, res) => {
    try {
      console.log('touched /songs with POST');
      res.json({data: data});

      const songs = await db.songs.create({
          track_name: req.body.track_name,
          track_duration: req.body.track_duration,
          album_id: req.body.album_id,
          explicit: req.body.explicit
      });

    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  })
  .delete((rec, res) => {
    try {
      console.log('touched /songs with DELETE');
      res.json({data: data});

      const songs = await db.songs.destroy({
        where:  {
          song_id: req.params.song_id
        }
      });

    } catch (err) {
      console.log(error);
      res.json({error: error});
    }
  });


export default router;