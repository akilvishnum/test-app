using System;
using Microsoft.AspNetCore.Http.HttpResults;

namespace WorkflowPOC.Modals
{
	public abstract class BaseTask
	{
		public void getTaskDetails(int taskId) {
			// give the task details based on taskId;
		}


		public abstract Task<bool> executeTask(object task);

		public abstract Task<bool> createTask(object task);
	}
}

