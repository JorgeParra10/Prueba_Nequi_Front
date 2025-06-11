import { Task } from '../domain/entities/task.entity';
import { v4 as uuidv4 } from 'uuid';

/**
 * Array de tareas de ejemplo (mock) para propósitos de desarrollo y prueba.
 * Cada objeto en este array representa una tarea con sus propiedades básicas
 * y está tipado como `Todo`.
 */
export const MOCK_TODOS: Task[] = [
  {
    id: uuidv4(),
    title: 'Comprar',
    description: 'Cereal, Arroz y verduras.',
    completed: false,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)), // Creada hace 1 día
  },
  {
    id: uuidv4(),
    title: 'Pagar',
    description: 'luz e internet.',
    completed: false,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 5)), // Creada hace 5 días
  },
  {
    id: uuidv4(),
    title: 'Preparar presentación',
    description: 'Diapositivas para la reunión del lunes.',
    completed: false,
    createdAt: new Date(new Date().setDate(new Date().getDate() - 10)), // Creada hace 10 días (vieja)
  }
];