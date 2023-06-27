import { Appointment } from '@prisma/client'
import { Groups } from '@tsed/schema'

class AppointmentSerializer implements Appointment {
	@Groups('read')
	appointment_id: number
	@Groups('read', 'put', 'post')
	tag: number
	@Groups('read', 'put', 'post')
	date_start: Date
	@Groups('read', 'put', 'post')
	date_end: Date
	@Groups('read', 'put', 'post')
	note: string | null
	@Groups('read', 'put', 'post')
	reminder: Date
	created_at: Date | null
	updated_at: Date | null
	deleted_at: Date | null
	@Groups('read', 'put', 'post')
	property_id: number
	@Groups('read', 'put', 'post')
	user_id: number
}

export { AppointmentSerializer }