const calendarGrid = document.getElementById("calendarGrid");
    const calendarTitle = document.getElementById("calendarTitle");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");

    let currentDate = new Date();

    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Set calendar title
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      calendarTitle.textContent = `${monthNames[month]} ${year}`;

      // Clear previous calendar cells
      calendarGrid.innerHTML = "";

      // Add empty cells for days before the 1st
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "column is-one-seventh has-background-light has-border";
        calendarGrid.appendChild(emptyCell);
      }

      // Add cells for each day of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.className = "column is-one-seventh has-text-centered has-border";
        dayCell.textContent = day;
        calendarGrid.appendChild(dayCell);
      }
    }

    // Navigation
    prevMonth.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });

    nextMonth.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });

    // Initialize the calendar
    renderCalendar(currentDate);