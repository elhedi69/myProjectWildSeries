import categoryRepository from "./categoryRepository";

// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

/* Here you code */
const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const program = categories.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default { browse, read };
