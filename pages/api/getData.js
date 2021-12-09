import axios from 'axios';

export default async function apiHandler(req, res) {
  const { username } = req.query;
  const apiKey = `api_key=${process.env.NEXT_PUBLIC_RIOT_API}`;
  let matchData = [];

  const profilePuuid = await axios.get(
    `https://eun1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${username}?${apiKey}`
  );

  const getMatchHistory = await axios.get(
    `https://europe.api.riotgames.com/tft/match/v1/matches/by-puuid/${profilePuuid.data.puuid}/ids?count=10&${apiKey}`
  );

  for (const match of getMatchHistory.data) {
    const individualMatch = await axios.get(
      `https://europe.api.riotgames.com/tft/match/v1/matches/${match}?${apiKey}`
    );
    const data = individualMatch.data.info;
    const playerMatchData = data.participants.filter(
      (player) => player.puuid === profilePuuid.data.puuid
    );

    const singleMatchData = {
      gametype: data.tft_game_type,
      set: data.tft_set_number,
      player: playerMatchData[0],
    };
    matchData.push(singleMatchData);
  }
  return res.status(200).json({
    profileIconId: profilePuuid.data.profileIconId,
    profileLevel: profilePuuid.data.summonerLevel,
    username: profilePuuid.data.name,
    matchData: matchData,
  });
}
