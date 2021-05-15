// import { CustomError } from '../errors/custom-error';

// export const errorHandler = (err, req, res, next) => {
//   if (err instanceof CustomError) {
//     return res.status(err.statusCode).send({ errors: err.serializeErrors() });
//   }
//   res.status(400).send({ errors: [{ message: 'Something went wrong' }] });
// };
