const locale = 'pt-BR';

const logger = (err, req, res, next) => {  
  console.log(`\n[Data/hora: ${new Date().toLocaleString(locale)}] - ${req.method} ${req.path}`);  
  console.log(`\n`, req.body);
  if (err) {
    console.error(`\n${err}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
  next();
}

module.exports = logger;