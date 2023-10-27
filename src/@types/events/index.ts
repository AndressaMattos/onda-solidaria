import * as zod from 'zod'

export const newEventSchema = zod.object({
  eventName: zod.string().min(10, 'O nome do evento deve ter no mínimo 10 caracteres'),
  city: zod.string().min(3, 'A cidade deve ter no mínimo 3 caracteres'),
  state: zod.string().min(2, 'O estado deve ter no mínimo 2 caracteres'),
  address: zod.string().min(3, 'O endereço deve ter no mínimo 3 caracteres'),
  description: zod.string().min(3, 'A descrição deve ter no mínimo 3 caracteres'),
  startDate: zod.string(),
  endDate: zod.string()
})

export type eventSchema = zod.infer<typeof newEventSchema>;