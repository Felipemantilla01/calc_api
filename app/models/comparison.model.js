/**
 * Copyright by Felipe Mantilla Gomez
 */

module.exports = (sequelize, Sequelize) => {
	const Comparison = sequelize.define('comparisons', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		date: {
			type: Sequelize.STRING
		},
		job_number: {
			type: Sequelize.STRING
		},
		job_status: {
			type: Sequelize.STRING
		},
		customer_type: {
			type: Sequelize.STRING
		},
		customer_builder_name: {
			type: Sequelize.STRING
		},
		customer_job_area: {
			type: Sequelize.STRING
		},
		material_name: {
			type: Sequelize.STRING
		},
		
		area_1: {
			type: Sequelize.STRING
		},
		material_name_area_1: {
			type: Sequelize.STRING
		},
		material_1: {
			type: Sequelize.STRING
		},
		brand_1: {
			type: Sequelize.STRING
		},
		level_1: {
			type: Sequelize.STRING
		},
		price_1: {
			type: Sequelize.STRING
		},
		
		area_2: {
			type: Sequelize.STRING
		},
		material_name_area_2: {
			type: Sequelize.STRING
		},
		material_2: {
			type: Sequelize.STRING
		},
		brand_2: {
			type: Sequelize.STRING
		},
		level_2: {
			type: Sequelize.STRING
		},
		price_2: {
			type: Sequelize.STRING
		},

		area_other: {
			type: Sequelize.STRING
		},
		material_name_area_other: {
			type: Sequelize.STRING
		},
		material_other: {
			type: Sequelize.STRING
		},
		brand_other: {
			type: Sequelize.STRING
		},
		level_other: {
			type: Sequelize.STRING
		},
		price_other: {
			type: Sequelize.STRING
		},
		
		phases: {
			type: Sequelize.STRING
		},
		material_name_phases: {
			type: Sequelize.STRING
		},
		material_phases: {
			type: Sequelize.STRING
		},
		brand_phases: {
			type: Sequelize.STRING
		},
		level_phases: {
			type: Sequelize.STRING
		},
		price_phases: {
			type: Sequelize.STRING
		},

		area_other_2: {
			type: Sequelize.STRING
		},
		material_name_area_other_2: {
			type: Sequelize.STRING
		},
		material_other_2: {
			type: Sequelize.STRING
		},
		brand_other_2: {
			type: Sequelize.STRING
		},
		level_other_2: {
			type: Sequelize.STRING
		},
		price_other_2: {
			type: Sequelize.STRING
		},

		phases_2: {
			type: Sequelize.STRING
		},
		material_name_phases_2: {
			type: Sequelize.STRING
		},
		material_phases_2: {
			type: Sequelize.STRING
		},
		brand_phases_2: {
			type: Sequelize.STRING
		},
		level_phases_2: {
			type: Sequelize.STRING
		},
		price_phases_2: {
			type: Sequelize.STRING
		},

		state: {
			type: Sequelize.STRING
		},
		oute_of_state: {
			type: Sequelize.STRING
		},
		complete_job_picture: {
			type: Sequelize.STRING
		},
		installer: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_kitchen: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_kitchen: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_kitchen: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_kitchen: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_vanity: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_vanity: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_vanity: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_vanity: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_laundry: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_laundry: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_laundry: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_laundry: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_butlers: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_butlers: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_butlers: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_butlers: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_ppc: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_ppc: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_ppc: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_ppc: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_drop_zone: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_drop_zone: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_drop_zone: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_drop_zone: {
			type: Sequelize.STRING
		},
		
		mw_cad_sqft_btwb: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_btwb: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_btwb: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_btwb: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_fhbs: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_fhbs: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_fhbs: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_fhbs: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_copy_print: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_copy_print: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_copy_print: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_copy_print: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_pantry_coffee: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_pantry_coffee: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_pantry_coffee: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_pantry_coffee: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_phase_19a: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_phase_19a: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_phase_19a: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_phase_19a: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_phase_19b: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_phase_19b: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_phase_19b: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_phase_19b: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_remake: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_remake: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_remake: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_remake: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_rework: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_rework: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_rework: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_rework: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_valet: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_valet: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_valet: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_valet: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_morning_room: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_morning_room: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_morning_room: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_morning_room: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_wine_bar: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_wine_bar: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_wine_bar: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_wine_bar: {
			type: Sequelize.STRING
		},

		mw_cad_sqft_pocket_office: {
			type: Sequelize.STRING
		},
		calculated_cad_sqft_pocket_office: {
			type: Sequelize.STRING
		},
		mw_sold_sqft_pocket_office: {
			type: Sequelize.STRING
		},
		calculated_sold_sqft_pocket_office: {
			type: Sequelize.STRING
		},

		notes: {
			type: Sequelize.STRING
		},
		legend: {
			type: Sequelize.STRING
		}
	});

	return Comparison;
}