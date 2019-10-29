<template>
  <li class="contact">
    <div class="header">
      <div class="personal-info">
        <!-- <h3 class="name">Cranjis McBasketball</h3> -->
        <div class="name">
          <p class="first">Cranjis</p>
          <p class="last">McBasketball</p>
        </div>
        <div class="contact-controls">
          <button class="edit">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="contact-info">
        <p class="phone">555-555-5555</p>
        <p class="email">person@email.com</p>
      </div>
    </div>
    <div class="address">
      <div>
        <p class="line1">123 Street Ave., Suite 100</p>
        <p class="line2">FakeBook, Inc.</p>
      </div>
      <div class="city-state-zip">
        <p class="city-state">City, ST</p>
        <p class="zip">55555</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    contact: {
      firstName: {
        type: String,
        required: true
      },
      middleName: String,
      lastName: {
        type: String,
        required: true
      },
      phone: String,
      email: String,
      line1: {
        type: String,
        required: true
      },
      line2: String,
      city: {
        type: String,
        required: true
      },
      stateOrProvince: {
        type: String,
        required: true
      },
      postalCode: {
        type: String,
        required: true
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/globals.scss";

.contact {
  border: solid 1px lightgray;
  border-radius: 5px;
  padding: 0.2em;

  .header {
    border-bottom: solid 1px black;
    margin-bottom: 0.75em;

    .personal-info {
      @extend .row;
      justify-content: space-between;
    }

    .contact-controls {
      @extend .row;
      flex-wrap: wrap;
      button {
        background-color: white;
        border: none;
        font-size: 1.5em;
        padding: 0.25em;
      }

      button:hover {
        cursor: pointer;
      }

      .edit {
        color: #2dabff;

        &:hover {
          color: #2785c4;
        }
      }

      .delete {
        color: #fd3030;

        &:hover {
          color: #a70000;
        }
      }
    }
  }

  .name {
    p {
      font-size: 1.1em;
      font-weight: bold;
    }
  }

  .contact-info {
    @extend .row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .address {
    @extend .row;
    justify-content: space-between;
  }
}

@media screen and (min-width: 600px) {
}
</style>