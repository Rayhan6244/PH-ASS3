function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number') 
    return "Invalid";
  if (teamAGoals > teamBGoals) 
    return "Team A Won";
  if (teamBGoals > teamAGoals) 
    return "Team B Won";
  return "Draw";
}
console.log(matchWinner(2, 3));
