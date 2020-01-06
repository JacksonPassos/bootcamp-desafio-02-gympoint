import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll({
      attributes: ['id', 'title', 'duration', 'price'],
    });
    return res.json(plans);
  }

  async store(req, res) {
    const planExists = await Plan.findOne({ where: { title: req.body.title } });
    if (planExists) {
      return res.status(400).json({ error: 'Plano já existente' });
    }

    const plan = await Plan.create(req.body);
    return res.json(plan);
  }

  async update(req, res) {
    const { idPlan } = req.params;

    const plan = await Plan.findByPk(idPlan);

    if (!plan) {
      return res.status(400).json({
        error: 'Id Inválido. Informe um Id válido para alterar os dados',
      });
    }

    const { title, duration, price } = await plan.update(req.body);

    return res.json({
      idPlan,
      title,
      duration,
      price,
    });
  }

  async delete(req, res) {
    const { idPlan } = req.params;

    const plan = await Plan.findByPk(idPlan);

    if (!plan) {
      return res.status(400).json({
        error:
          'Id Inválido. Informe um Id válido para deletar o plano desejado',
      });
    }

    const deletePlan = await plan.destroy({ where: { id: idPlan } });

    if (!deletePlan)
      return res.json({
        success: false,
        message: 'Ocorreu um erro inesperado. Tente novamente.',
      });
    return res.json({
      success: true,
      message: `O plano ${plan.title} foi removido com sucesso`,
    });
  }
}

export default new PlanController();
