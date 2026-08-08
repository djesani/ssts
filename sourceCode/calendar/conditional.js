    const filterString = (string) => {
      const words = string.split(" ");
      if (words.includes("Fast", "Ekadashi", "Panchmi", "Jayanti")) {
        return "https://sydneytemple.org/images/events/ekadashi-fast.png";
      }
      if (words.includes("Raas")) {
        return "https://sydneytemple.org/images/events/Raas.png";
      }
      if (words.includes("10th")) {
        return "https://sydneytemple.org/images/events/10thLogo.png";
      }
      if (words.includes("Poojan/Ankoot")) {
        return "https://sydneytemple.org/images/events/CalendarAnkoot.png";
      }

      if (words.includes("Abhishek")) {
        return "https://sydneytemple.org/images/events/abhishek.png";
      }

      if (words.includes("Eclipse")) {
        return "https://sydneytemple.org/images/events/eclipse.png";
      }

      if (words.includes("Hanuman")) {
        return "https://sydneytemple.org/images/events/hanuman-jayanti.png";
      }

      if (words.includes("Hindola")) {
        return "https://sydneytemple.org/images/events/hindola.png";
      }

      if (words.includes("Holika")) {
        return "https://sydneytemple.org/images/events/holika-dahan.png";
      }

      if (words.includes("India")) {
        return "https://sydneytemple.org/images/events/india-independence.png";
      }

      if (words.includes("Janmashtmi")) {
        return "https://sydneytemple.org/images/events/janmashtmi.png";
      }

      if (words.includes("Krushna, Krishna")) {
        return "https://sydneytemple.org/images/events/krushna-janmashtmi.png";
      }

      if (words.includes("Laxmi")) {
        return "https://sydneytemple.org/images/events/laxmi-poojan.png";
      }

      if (words.includes("Ramnavmi")) {
        return "https://sydneytemple.org/images/events/ramnavmi.png";
      }

      https: return "";
    };
