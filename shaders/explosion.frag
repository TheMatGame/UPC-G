#version 330 core

in vec4 frontColor;
out vec4 fragColor;

uniform sampler2D explosion;
in vec2 vtexCoord;

void main()
{
    vec4 Color = texture(explosion, vtexCoord);
    fragColor = Color * Color.a;
}
