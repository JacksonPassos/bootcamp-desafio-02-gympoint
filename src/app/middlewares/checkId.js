/* eslint-disable radix */
import Student from '../models/Student';

export default async (req, res, next) => {
  const { idStudent } = req.params;
  const id = parseInt(idStudent);

  if (id > 0) {
    const student = await Student.findByPk(id);

    if (!student) {
      return res
        .status(400)
        .json({ error: 'Aluno não encontrado. Por favor tente novamente' });
    }

    return next();
  }

  return res
    .status(400)
    .json({ error: 'Id do aluno inválido. Por favor tente novamente' });
};
