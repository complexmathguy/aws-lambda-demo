const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const { createStore } = require('./utils');
const context = async ({ req }) => {
	  return {};
	};
const GameAPI = require('./datasources/GameDS');
const LeagueAPI = require('./datasources/LeagueDS');
const MatchupAPI = require('./datasources/MatchupDS');
const PlayerAPI = require('./datasources/PlayerDS');
const TournamentAPI = require('./datasources/TournamentDS');

const store = createStore();
const internalEngineConfig = require('./engine-config');	
const dataSources = () => ({
	    GameAPI: new GameAPI({ store }),
	    LeagueAPI: new LeagueAPI({ store }),
	    MatchupAPI: new MatchupAPI({ store }),
	    PlayerAPI: new PlayerAPI({ store }),
	    TournamentAPI: new TournamentAPI({ store }),
});

store.game.sync();
store.league.sync();
store.matchup.sync();
store.player.sync();
store.tournament.sync();

const server = new ApolloServer({
  typeDefs,
  context,
  resolvers,
  playground: { version: '1.7.25' },
  engine: {
    apiKey: process.env.APOLLO_KEY,
	...internalEngineConfig,
  },
  dataSources

});

server.listen().then(({ url }) => {
  console.log(`ð Server ready at ${url}`);
});


module.exports = {
    dataSources,
	context,
	typeDefs,
	resolvers,
	ApolloServer,
	store,
	server,
    GameAPI,
    LeagueAPI,
    MatchupAPI,
    PlayerAPI,
    TournamentAPI,
};