    const z = require('zod')

    const movieSchema = z.object({
        title: z.string({
            invalid_type_error: "El titulo debe ser un texto",
            required_error: "Este campo es requerido"
        }),
        year: z.number().int().positive().min(1900).max(2025),
        director: z.string(),
        duration: z.number().int().positive(),
        rate: z.number().positive().max(10),
        poster: z.string().url({
            message: "Url invalida"
        }).endsWith(".webp"),
        genre: z.array(
            z.enum(["drama", "action", "pepe"])
        )
    })

    function parcialMovieSchema( object ) {
        return movieSchema.partial().safeParse(object)
    }

    function validateMovies(a){
        return movieSchema.safeParse(a)
    }

    module.exports = {
        validateMovies,
        parcialMovieSchema
    }