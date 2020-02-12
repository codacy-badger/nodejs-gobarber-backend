module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    underscored: true,
    underscoredAll: true,
    timestamps: true,
  },
};
