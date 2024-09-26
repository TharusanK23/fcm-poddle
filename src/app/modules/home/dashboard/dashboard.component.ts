import { Component, effect, OnInit } from '@angular/core';
import { NotFoundComponent } from "../../../components/not-found/not-found.component";
import { MessagingService } from '../../../services/messaging.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NotFoundComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  public notifications: any[] = [];
  public token: string = '';

  constructor(
    private messagingService: MessagingService
  ) {
    this._getFCMNotification();
  }

  ngOnInit(): void {
    this._getAllNotification();
  }

  private _getFCMNotification() {
    effect(() => {
      var newNotification = this.messagingService.newNotification();
      this.token = this.messagingService.token();
      if(newNotification !== null) {
        console.log(newNotification);
        this.notifications.unshift(newNotification.notification);
      }      
    });
  }

  private _getAllNotification() {
    this.notifications = [
      {
        "title": "Sunset at the Beach",
        "body": "A beautiful sunset at the beach with vibrant orange and pink hues reflecting on the water."
      },
      {
        "title": "Mountain Adventure",
        "body": "An adventurous hike through the rocky mountains, capturing stunning peaks and lush forests."
      },
      {
        "title": "City Nightlife",
        "body": "The vibrant nightlife of the city with neon lights and bustling streets."
      },
      {
        "title": "Cozy Winter Cabin",
        "body": "A warm, cozy cabin nestled in the snow-covered woods, with a chimney puffing smoke."
      },
      {
        "title": "Tropical Paradise",
        "body": "A serene tropical island with crystal clear waters, palm trees, and white sandy beaches."
      },
      {
        "title": "Forest Waterfall",
        "body": "A hidden waterfall deep in the forest, surrounded by lush greenery and the sound of rushing water."
      },
      {
        "title": "Desert Safari",
        "body": "An exciting adventure through the golden sands of the desert, featuring camels and dunes."
      },
      {
        "title": "Autumn Leaves",
        "body": "Golden and red leaves covering the forest floor during the peaceful autumn season."
      },
      {
        "title": "Snowy Mountain Peaks",
        "body": "The majestic snow-capped mountains under a clear blue sky, standing tall and untouched."
      },
      {
        "title": "Ocean Waves",
        "body": "Gentle ocean waves crashing against the shore, with the horizon stretching endlessly."
      },
      {
        "title": "Rainy City Streets",
        "body": "A quiet city street reflecting the lights of storefronts after a fresh rain."
      },
      {
        "title": "Lush Green Valley",
        "body": "A picturesque valley filled with lush green grass and colorful wildflowers, perfect for a summer retreat."
      },
      {
        "title": "Foggy Forest Morning",
        "body": "A calm and serene morning in the forest, with mist rising through the trees."
      },
      {
        "title": "Countryside Road",
        "body": "A winding country road lined with tall trees and fields of blooming sunflowers."
      },
      {
        "title": "Starry Night Sky",
        "body": "A breathtaking view of the night sky filled with twinkling stars and the glowing Milky Way."
      },
      {
        "title": "Lavender Fields",
        "body": "Endless fields of fragrant lavender stretching towards the horizon under a clear sky."
      },
      {
        "title": "Rocky Shoreline",
        "body": "Waves crashing against jagged rocks on a rugged coastline, with the salty breeze in the air."
      },
      {
        "title": "Hidden Cave",
        "body": "An ancient cave filled with glowing stalactites, hidden deep within a forest."
      },
      {
        "title": "Wildflower Meadow",
        "body": "A meadow bursting with colorful wildflowers, buzzing with bees and butterflies."
      },
      {
        "title": "Rolling Hills",
        "body": "Soft, rolling hills covered in green grass, stretching as far as the eye can see."
      },
      {
        "title": "Quiet Lake",
        "body": "A peaceful lake surrounded by trees, with its still surface reflecting the clear sky above."
      },
      {
        "title": "Sunrise over the Mountains",
        "body": "The sun rising over the distant mountains, casting a golden glow on the landscape."
      },
      {
        "title": "Cherry Blossom Season",
        "body": "Cherry blossom trees in full bloom, their pink petals fluttering gently in the spring breeze."
      },
      {
        "title": "Foggy City Skyline",
        "body": "The tops of skyscrapers peeking through the fog, giving the city an ethereal and mysterious feel."
      },
      {
        "title": "Abandoned Castle",
        "body": "A centuries-old castle standing tall on a hill, its stone walls weathered by time."
      },
      {
        "title": "Flower Garden",
        "body": "A meticulously arranged garden filled with a variety of colorful flowers in full bloom."
      },
      {
        "title": "Snow-Covered Forest",
        "body": "A winter wonderland of snow-covered trees, with a soft blanket of snow on the ground."
      },
      {
        "title": "Golden Wheat Fields",
        "body": "Endless fields of golden wheat swaying gently in the breeze under a warm summer sun."
      },
      {
        "title": "Lighthouse by the Sea",
        "body": "A lone lighthouse standing guard on a cliff, with waves crashing against the rocks below."
      },
      {
        "title": "Autumn Forest Path",
        "body": "A quiet path through a forest ablaze with the colors of fall, red, orange, and yellow leaves all around."
      },
      {
        "title": "Peaceful Riverbank",
        "body": "A gentle river flowing through a lush landscape, with birds chirping in the trees overhead."
      },
      {
        "title": "Sunlit Meadow",
        "body": "A meadow bathed in golden sunlight, with tall grass swaying in the gentle breeze."
      },
      {
        "title": "Mountain Reflection",
        "body": "A pristine lake reflecting the towering mountains, creating a perfect mirror image."
      },
      {
        "title": "Cottage in the Woods",
        "body": "A small, cozy cottage nestled in a clearing in the woods, with smoke rising from the chimney."
      },
      {
        "title": "Ocean Sunset",
        "body": "The sun setting over the ocean, casting shades of orange and pink across the sky and water."
      },
      {
        "title": "Frozen Lake",
        "body": "A large lake frozen over in the middle of winter, with skaters enjoying the crisp air."
      },
      {
        "title": "Countryside Farm",
        "body": "A peaceful farm surrounded by green fields, with a red barn and grazing animals."
      },
      {
        "title": "Vibrant Coral Reef",
        "body": "An underwater view of a coral reef, teeming with colorful fish and marine life."
      },
      {
        "title": "Deserted Island",
        "body": "A small, deserted island with palm trees, white sand, and crystal clear waters all around."
      },
      {
        "title": "Sunrise on the Plains",
        "body": "The sun rising over the vast, open plains, casting a warm glow on the tall grass."
      },
      {
        "title": "Ancient Temple",
        "body": "A grand, ancient temple hidden deep in the jungle, overgrown with vines and trees."
      },
      {
        "title": "Snowy Village",
        "body": "A quaint village covered in snow, with warm lights glowing in the windows of small cottages."
      },
      {
        "title": "Wild River Rapids",
        "body": "A powerful river rushing through a narrow canyon, with white water rapids crashing against the rocks."
      },
      {
        "title": "Windmill in the Fields",
        "body": "A traditional windmill standing tall in the middle of a green field, with flowers blooming all around."
      },
      {
        "title": "Peaceful Mountain Lake",
        "body": "A still, clear lake surrounded by towering mountains, reflecting the blue sky and fluffy clouds."
      },
      {
        "title": "Golden Hour in the City",
        "body": "The city bathed in the golden glow of the setting sun, with skyscrapers casting long shadows."
      },
      {
        "title": "Dew on Grass",
        "body": "Morning dew glistening on blades of grass, sparkling in the early sunlight."
      },
      {
        "title": "Alpine Meadows",
        "body": "A high-altitude meadow filled with colorful wildflowers, surrounded by towering mountain peaks."
      },
      {
        "title": "Deserted Ghost Town",
        "body": "An abandoned ghost town in the desert, with crumbling buildings and an eerie silence."
      },
      {
        "title": "Rain forest Canopy",
        "body": "A lush rain forest canopy teeming with life, with birds and animals hidden among the leaves."
      }
    ];    
  }

  public navigateByType(notification: any) {
    console.log(notification);
  }
}
