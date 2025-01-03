import { ApiHandler } from "../index"

export function coordinateModels(models: ApiHandler[]): void {
	// Implement coordination logic here
	// This function will be responsible for coordinating the efforts of multiple models
	// to solve a single prompt collaboratively.
	models.forEach((model) => {
		if (model.coordinateWithOtherModels) {
			model.coordinateWithOtherModels(models)
		}
	})
}
