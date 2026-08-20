const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || err.statusCode || 500;

  // Registrar o erro no console/logs internos
  console.error(`[Internal Error] ${err.message}`, err.stack);

  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Erro interno no servidor',
    code: statusCode
  });
};

module.exports = errorHandler;
